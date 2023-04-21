import _ from 'underscore';
import {
  DefInfo,
  DictionaryComponentImport,
  DictionaryComponentPattern,
  SingleComponentImport,
  SingleComponentPattern,
  getRef,
  importPath,
  lastPart,
  resolveHashType,
  resolveSchemaType,
  seeDefHyperLink
} from './util.mjs';
import { OpenAPIObject, ReferenceObject, SchemaObject } from 'openapi3-ts';
import { generateHeader, docComment, indent, writeOutFile } from './generate-common.mjs';

/**
 * Some properties aren't marked as nullable in the openapi docs, but they are
 * frequently null in practice and cause trouble. Adding a property to this
 * list forces it to be emitted as nullable.
 */
const frequentlyNullProperties = ['itemCategoryHashes'];

export function generateTypeDefinition(
  file: string,
  component: DefInfo,
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo }
) {
  const importFiles = new Map<string, string>();

  const componentDefiniton = generateComponentDefinition(
    component,
    doc,
    componentByDef,
    importFiles
  );

  const imports: string[] = [];
  for (const [name, path] of importFiles) {
    const importPathStr = importPath(
      path.replace('#/components', ''),
      '/' + file.replace('.ts', '')
    );
    if (importPathStr !== name) {
      imports.push(`import { ${name} } from '${importPathStr}'`);
    }
  }

  const filename = `src/${file}`;

  const definition =
    _.compact([generateHeader(doc), imports.join('\n'), componentDefiniton]).join('\n\n') + '\n';

  writeOutFile(filename, definition);
}

function generateComponentDefinition(
  defInfo: DefInfo,
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo },
  importFiles: Map<string, string>
) {
  const component = getRef(doc, defInfo.def);
  if (!component) {
    return undefined;
  }

  if (component.enum) {
    return generateEnum(defInfo, component);
  } else {
    return generateTypeSchema(defInfo, component, doc, componentByDef, importFiles);
  }
}

function generateEnum(defInfo: DefInfo, component: SchemaObject) {
  const hyperRef = seeDefHyperLink(defInfo.def);
  const values = component['x-enum-values']
    .map((value: SchemaObject) => {
      const doc = value.description ? docComment(value.description) + '\n' : '';
      return `${doc}${value.identifier} = ${value.numericValue}`;
    })
    .join(',\n');

  const docs = component.description ? [component.description] : [];
  if (component['x-enum-is-bitmask']) {
    docs.push(
      `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
    );
  }

  const docString = hyperRef ? docComment(docs.join('\n'), [hyperRef]) + '\n' : '';

  return `${docString}export enum ${defInfo.typeName} {
${indent(values, 1)}
}`;
}

export function typeNameImports(
  componentPath: string,
  doc: OpenAPIObject,
  importFiles: Map<string, string>,
  componentByDef: { [def: string]: DefInfo },
  mappedComponentName: string | null
) {
  const name = lastPart(componentPath);
  const component = getRef(doc, componentPath);

  if (!component) {
    return 'any';
  }

  if (componentPath.includes('/responses/')) {
    const property = component.properties!.Response;
    if (property) {
      return resolveSchemaType(property, doc, importFiles, componentByDef, null);
    }
  }

  if (name.includes('DictionaryComponentResponseOf')) {
    importFiles.set('DictionaryComponentResponse', DictionaryComponentImport);
    importFiles.set('ConditionalComponent', './generic/ComponentTypes');
    resolveSchemaType(component.properties?.data!, doc, importFiles, componentByDef, null);
    const data = component.properties!.data! as SchemaObject;
    const addProps = data.additionalProperties as ReferenceObject;
    const requiredComponent = componentByDef[addProps.$ref].componentName ?? mappedComponentName;
    const [_, hash, structure] = name.match(DictionaryComponentPattern)!;

    return `ConditionalComponent<T, DestinyComponentType.${requiredComponent}, DictionaryComponentResponse<${resolveHashType(
      hash
    )}, ${structure}>>`;
  } else if (name.includes('SingleComponentResponseOf')) {
    importFiles.set('SingleComponentResponse', SingleComponentImport);
    importFiles.set('ConditionalComponent', './generic/ComponentTypes');
    resolveSchemaType(component.properties?.['data']!, doc, importFiles, componentByDef, null);
    const data = component.properties!.data as ReferenceObject;
    const requiredComponent = componentByDef[data.$ref].componentName ?? mappedComponentName;
    return `ConditionalComponent<T, DestinyComponentType.${requiredComponent}, SingleComponentResponse<${
      name.match(SingleComponentPattern)![1]
    }>>`;
  } else if (name.includes('ItemComponentSetOf')) {
    importFiles.set(name, componentPath);
    return `${name}<T>`;
  } else if (name !== 'int64' && name !== 'int32' && name !== 'boolean') {
    importFiles.set(name, componentPath);
  }
  return name;
}

// produces the body of a type definition
function generateTypeSchema(
  defInfo: DefInfo,
  component: SchemaObject,
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo },
  importFiles: Map<string, string>
) {
  if (defInfo.isComponentResponse) {
    importFiles.set('ComponentData', './generic/ComponentTypes');
    importFiles.set('DestinyComponentType', './schemas/Destiny/DestinyComponentType');
  }
  if (defInfo.typeName.includes('ItemComponentSetOf')) {
    importFiles.set('DestinyComponentType', './schemas/Destiny/DestinyComponentType');
  }
  const classFields = _.map(component.properties!, (schema: SchemaObject, param) => {
    const paramDef = resolveSchemaType(schema, doc, importFiles, componentByDef, null);
    const docs = schema.description ? [schema.description] : [];

    if (schema['x-mapped-definition']) {
      docs.push(
        `Mapped to ${componentByDef[schema['x-mapped-definition'].$ref].typeName} in the manifest.`
      );
    }
    if (schema['x-enum-is-bitmask']) {
      docs.push(
        `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
      );
    }
    const comment = docs.length ? docComment(docs.join(' ')) + '\n' : '';
    return `${comment}readonly ${param}${
      schema.nullable ||
      frequentlyNullProperties.includes(param) ||
      schema.description?.toLowerCase().includes('null')
        ? '?'
        : ''
    }: ${paramDef};`;
  });

  const hyperRef = seeDefHyperLink(defInfo.def);

  const docString = component.description
    ? docComment(component.description, [hyperRef])
    : docComment('', [hyperRef]);
  return `${docString}\nexport interface ${defInfo.typeName}${
    defInfo.isComponentResponse || defInfo.typeName.includes('ItemComponentSetOf')
      ? '<T extends DestinyComponentType[]> '
      : ''
  }${defInfo.isComponentResponse ? 'extends ComponentData' : ''} {
${indent(classFields.join('\n'), 1)}
}`;
}
