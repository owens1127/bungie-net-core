import { OpenAPIObject, SchemaObject } from 'openapi3-ts';
import { DefinitionObject, frequentlyNullProperties } from './types.mjs';
import path from 'path';
import { generateHeader } from '../generator-old/generate-common.mjs';
import {
  docComment,
  generateImports,
  indent,
  seeLink
} from './writing-utils.mjs';
import _ from 'underscore';

export function generateComponentFile(
  file: string,
  definitions: DefinitionObject[],
  doc: OpenAPIObject,
  componentMap: Map<string, DefinitionObject>
) {
  const importFiles = new Map<string, string[]>();

  const componentDefinitons = definitions.map(definition =>
    generateComponentCode(definition, doc, importFiles, componentMap)
  );

  const currentFile = path.join('src/', file);

  const imports = Array.from(importFiles).map(([importFrom, componentNames]) =>
    generateImports(currentFile, importFrom, componentNames)
  );

  const contents =
    _.compact([
      generateHeader(doc),
      imports.join('\n'),
      componentDefinitons
    ]).join('\n\n') + '\n';

  //   writeOutFile(filename, contents);
}

function generateComponentCode(
  definition: DefinitionObject,
  doc: OpenAPIObject,
  importFiles: Map<string, string[]>,
  componentMap: Map<string, DefinitionObject>
): string {
  if (definition.ref.enum) {
    return generateEnum(definition);
  } else {
    return generateInterface(definition);
  }
}

function generateEnum(definition: DefinitionObject): string {
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

  return `${docString}export enum ${definition.module.componentName} {
${indent(values, 1)}
}`;
}

function generateInterface(definition: DefinitionObject) {
  if (definition.data.hasConditionalComponents) {
    // TODO
  }

  const classFields = _.map(
    definition.ref.properties!,
    (schema: SchemaObject, param) => {
      const paramDef = 'X';
      //   const paramDef = resolveSchemaType(
      //     schema,
      //     doc,
      //     importFiles,
      //     componentByDef,
      //     null
      //   );
      const docs = schema.description ? [schema.description] : [];

      // todo
      //   if (schema['x-mapped-definition']) {
      //     docs.push(
      //       `Mapped to ${
      //         componentByDef[schema['x-mapped-definition'].$ref].typeName
      //       } in the manifest.`
      //     );
      //   }
      //   if (schema['x-enum-is-bitmask']) {
      //     docs.push(
      //       `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
      //     );
      //   }
      const comment = docs.length ? docComment(docs.join(' ')) + '\n' : '';
      return `${comment}readonly ${param}${
        schema.nullable ||
        frequentlyNullProperties.includes(param) ||
        schema.description?.toLowerCase().includes('null')
          ? '?'
          : ''
      }: ${paramDef};`;
    }
  );

  const link = seeLink(definition.component);

  //   let generic = '';
  //   let extension = '';
  //   let isInterface = true;
  //   if (defInfo.typeName.includes('ItemComponentSetOf')) {
  //     generic = '<T extends DestinyComponentType[]> ';
  //   } else if (defInfo.isComponentResponse) {
  //     generic = '<T extends DestinyComponentType[]> ';
  //     extension = 'extends ComponentData';
  //   } else if (defInfo.filename.includes('DestinyDefinition')) {
  //     importFiles.set(
  //       'AllManifestComponents',
  //       '../../../manifest/manifest-types'
  //     );
  //     isInterface = false;
  //     generic = '<T extends keyof AllManifestComponents> ';
  //     extension = '= AllManifestComponents[T][number] & ';
  //   }

  const docString = docComment(
    _.compact[definition.ref.description ?? ''].join(' '),
    [link]
  );

  return (
    docString +
    '\n\n' +
    `export ${definition.module.interfaceName} {` +
    indent(classFields.join('\n'), 1) +
    '}'
  );
}
