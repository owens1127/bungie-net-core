import { OpenAPIObject, SchemaObject } from 'openapi3-ts';
import { DefinitionObject, frequentlyNullProperties } from './types.mjs';
import path from 'path';
import {
  docComment,
  generateHeader,
  generateImports,
  indent,
  seeLink,
  writeOutFile
} from './writing-utils.mjs';
import _ from 'underscore';
import { resolveParamType } from './resolve-parameters.mjs';
import { importInterface } from './util.mjs';

export function generateComponentFile(
  file: string,
  definitions: DefinitionObject[],
  doc: OpenAPIObject,
  componentMap: Map<string, DefinitionObject>
) {
  const importFiles = new Map<string, Set<string>>();

  const componentDefinitons = definitions.map(definition =>
    generateComponentCode(definition, doc, importFiles, componentMap)
  );

  const imports = _.compact(
    Array.from(importFiles).map(([importFrom, componentNames]) =>
      generateImports(file, importFrom, Array.from(componentNames))
    )
  );

  const contents =
    _.compact([
      generateHeader(doc),
      imports.join('\n'),
      componentDefinitons
    ]).join('\n\n') + '\n';

  writeOutFile(path.join('src/', file), '.ts', contents);
}

function generateComponentCode(
  definition: DefinitionObject,
  doc: OpenAPIObject,
  importFiles: Map<string, Set<string>>,
  componentMap: Map<string, DefinitionObject>
): string {
  if (definition.ref.enum) {
    return generateEnum(definition);
  } else {
    return generateInterface(definition, doc, componentMap, importFiles);
  }
}

function generateEnum(definition: DefinitionObject<'normal'>): string {
  const link = seeLink(definition.component);
  const values = definition.ref['x-enum-values']
    .map((value: SchemaObject) => {
      const doc = value.description ? docComment(value.description) + '\n' : '';
      return `${doc}${value.identifier} = ${value.numericValue}`;
    })
    .join(',\n');

  const docs = definition.ref.description ? [definition.ref.description] : [];
  if (definition.ref['x-enum-is-bitmask']) {
    docs.push(
      `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
    );
  }

  const docString = docComment(docs.join('\n'), [link]) + '\n';

  return `${docString}export enum ${definition.module.name} {
${indent(values, 1)}
}`;
}

function generateInterface(
  definition: DefinitionObject,
  doc: OpenAPIObject,
  componentMap: Map<string, DefinitionObject<'genericParams' | 'normal'>>,
  importFiles: Map<string, Set<string>>
) {
  if (definition.module.type === 'genericParams') {
    definition.module.interfaces.forEach(intf => {
      importInterface(intf, importFiles);
    });
    definition.module.additionalReferences.forEach(ref => {
      resolveParamType({ $ref: ref }, componentMap, importFiles, null);
    });
  }

  const classFields = _.map(
    definition.ref.properties!,
    (schema: SchemaObject, param) => {
      const paramDef = resolveParamType(
        schema,
        componentMap,
        importFiles,
        null
      );
      const docs = schema.description ? [schema.description] : [];

      if (schema['x-mapped-definition']) {
        const module = componentMap.get(schema['x-mapped-definition'].$ref)!
          .module!;

        docs.push(
          `Mapped to ${
            module?.type === 'normal' ? module.name : module.importName
          } in the manifest.`
        );
      }
      if (schema['x-enum-is-bitmask']) {
        docs.push(
          `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
        );
      }
      const comment = docs.length ? docComment(docs.join(' ')) + '\n' : '';
      return (
        `${comment}` +
        `readonly ${param}${
          schema.nullable ||
          frequentlyNullProperties.includes(param) ||
          schema.description?.toLowerCase().includes('null')
            ? '?'
            : ''
        }: ${paramDef};`
      );
    }
  );

  const link = seeLink(definition.component);

  //     isInterface = false;
  //     generic = '<T extends keyof AllManifestComponents> ';
  //     extension = '= AllManifestComponents[T][number] & ';
  //   }

  const docString = docComment(
    _.compact([definition.ref.description ?? '']).join(' '),
    [link]
  );

  const module = definition.module as DefinitionObject<
    'normal' | 'genericParams'
  >['module'];
  return (
    docString +
    '\n\n' +
    `export interface ${
      module.type === 'normal' ? module.name : module.interfaceName
    } {` +
    '\n' +
    indent(classFields.join('\n'), 1) +
    '\n' +
    '}'
  );
}
