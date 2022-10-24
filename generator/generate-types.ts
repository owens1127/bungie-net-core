import _ from 'underscore';
import { DefInfo, getRef, resolveSchemaType } from './util.js';
import { OpenAPIObject, SchemaObject } from 'openapi3-ts';
import {
  generateHeader,
  generateImports,
  docComment,
  indent,
  addImport,
  writeOutFile,
  commentHyperReference,
} from './generate-common.js';

/**
 * Some properties aren't marked as nullable in the openapi docs, but they are frequently null in practice and cause trouble.
 * Adding a property to this list forces it to be emitted as nullable.
 */
const frequentlyNullProperties = ['itemCategoryHashes'];

export function generateTypeDefinitions(
  file: string,
  components: DefInfo[],
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo }
) {


  const importFiles: { [filename: string]: Set<string> } = {};

  const componentDefinitions = components.map((component) =>
        generateComponentDefinition(component, doc, componentByDef, importFiles)
  );


  const filename = `generated-src/${file}`;

  let specialDefinitions;
  if (file.startsWith('generics')) {
    if (file === 'generics/DictionaryComponentResponse.d.ts') {
      specialDefinitions = generateDictionaryResponse();
    } else if (file === 'generics/SingleComponentResponse.d.ts') {
      specialDefinitions = generateSingleComponentResponse();
    } else if (file === 'generics/ServerResponse.d.ts') {
      specialDefinitions = generateServerResponse();
    }
  }

  const imports = generateImports(filename, importFiles);

  const definition =
    _.compact([generateHeader(doc), imports, specialDefinitions, ...componentDefinitions]).join(
      '\n\n'
    ) + '\n';

  writeOutFile(filename, definition);
}

function generateComponentDefinition(
  defInfo: DefInfo,
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo },
  importFiles: { [filename: string]: Set<string> }
) {
  const component = getRef(doc, defInfo.def);
  if (!component) {
    return undefined;
  }

  if (component.enum) {
    return generateEnum(defInfo, component);
  } else if (isSpecialType(defInfo.typeName)) {
    return undefined;
  } else {
    return generateTypeSchema(
      defInfo,
      component,
      doc,
      componentByDef,
      importFiles
    );
  }
}

function generateEnum(defInfo: DefInfo, component: SchemaObject) {
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
  const hyperRef = commentHyperReference(defInfo.def)

  const docString = docs.length ? docComment(docs.join('\n'), [hyperRef]) + '\n' : '';

  // TODO: const enums are super efficient (they get inlined) but we may want to change this if we want to do things like
  // print out the name of an enum case.
  return `${docString}export const enum ${defInfo.typeName} {
${indent(values, 1)}
}`;
}

function generateTypeSchema(
  defInfo: DefInfo,
  component: SchemaObject,
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo },
  importFiles: { [filename: string]: Set<string> }
) {
  const parameterArgs = _.map(component.properties!, (schema: SchemaObject, param) => {

    const paramType = resolveSchemaType(schema, doc, importFiles, componentByDef);

    addImport(doc, schema, componentByDef, importFiles);

    const docs = schema.description ? [schema.description] : [];
    if (schema['x-mapped-definition']) {
      docs.push(
        `Mapped to ${
          componentByDef[schema['x-mapped-definition'].$ref].typeName
        } in the manifest.`
      );
    }
    if (schema['x-enum-is-bitmask']) {
      docs.push(
        `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
      );
    }


    const docString = docs.length ? docComment(docs.join('\n')) + '\n' : '';

    return `${docString}readonly ${param}${
        schema.nullable ||
        frequentlyNullProperties.includes(param) ||
        schema.description?.toLowerCase().includes('null')
            ? '?'
            : ''
    }: ${paramType};`
  });

  const hyperRef = commentHyperReference(defInfo.def)

  const docString = (component.description ?
      docComment(component.description, [hyperRef]) :
      docComment('', [hyperRef]));
  return `${docString}
export type ${defInfo.typeName} = {
${indent(parameterArgs.join('\n'), 1)}
}`
}

function isSpecialType(name: string) {
  return name.includes('>');
}

function generateSingleComponentResponse() {
  return `import { ComponentPrivacySetting } from '../schemas/Components/ComponentPrivacySetting.js'

export type SingleComponentResponse<T> = {
  readonly data?: T;
  readonly privacy: ComponentPrivacySetting;
}`
}

function generateDictionaryResponse() {
  return `import { ComponentPrivacySetting } from '../schemas/Components/ComponentPrivacySetting.js'

export type DictionaryComponentResponse<T> = {
  readonly data?: { [key: string]: T };
  readonly privacy: ComponentPrivacySetting;
}`
}

function generateServerResponse() {
  return `import { PlatformErrorCodes } from '../schemas/Exceptions/PlatformErrorCodes.js'

export type ServerResponse<T> = {
  readonly Response: T;
  readonly ErrorCode: PlatformErrorCodes;
  readonly ThrottleSeconds: number;
  readonly ErrorStatus: string;
  readonly Message: string;
  readonly MessageData: { [key: string]: string };
}`
}
