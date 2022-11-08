import _ from 'underscore';
import {DefInfo, getRef, importType, resolveSchemaType} from './util.js';
import { OpenAPIObject, SchemaObject } from 'openapi3-ts';
import {
  generateHeader,
  docComment,
  indent,
  writeOutFile,
} from './generate-common.js';
import {seeDefHyperLink} from "./type-index.js";
import path from "path";

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

  const componentDefiniton = generateComponentDefinition(component, doc, componentByDef, importFiles);

  const filename = `lib/${file}`;

  const definition =
    _.compact([generateHeader(doc), componentDefiniton]).join(
      '\n\n'
    ) + '\n';

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
  const fields = component['x-enum-values']
    .map((value: SchemaObject) => {
      const doc = value.description ? docComment(value.description) + '\n' : '';
      return `${doc}${value.identifier}: ${value.numericValue}`;
    })
    .join(',\n');

  const docs = component.description ? [component.description] : [];
  if (component['x-enum-is-bitmask']) {
    docs.push(
      `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
    );
  }
  const enums = component['x-enum-values'].map((value: SchemaObject) => {
    return defInfo.typeName + '.' + value.identifier;
  })
  const hyperRef = seeDefHyperLink(defInfo.def)

  const typeDef = docComment('', [`@typedef {number | ${enums.join(' | ')}} ` + defInfo.typeName, hyperRef]) + `\n`
  const type = '@type ' + defInfo.typeName;

  const docString = docs.length ? docComment(docs.join('\n'), [type, hyperRef]) + '\n' : '';

  return `${typeDef}${docString}const ${defInfo.typeName} = Object.freeze({
${indent(fields, 1)}
})
module.exports = ${defInfo.typeName}`;
}

// produces the body of a type definition
function generateTypeSchema(
  defInfo: DefInfo,
  component: SchemaObject,
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo },
  importFiles: Map<string, string>
) {
  const classFields = _.map(component.properties!, (schema: SchemaObject, param) => {

    let paramType = resolveSchemaType(schema, doc, importFiles, componentByDef);
    const isArray = paramType.includes('[]');
    const file = importFiles.get(paramType) || (isArray && importFiles.get(paramType.replace('[]', '')));
    let paramDef = paramType;
    if (file) {
      const importStr = importType(file, defInfo);
      paramDef = isArray ? importStr + '[]' : importStr;
    }
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

    // const optional =
    //     schema.nullable ||
    //     frequentlyNullProperties.includes(param) ||
    //     schema.description?.toLowerCase().includes('null')
    //         ? '?'
    //         : '';
    const comment = docComment(docs.join(' '), ['@readonly', `@type {${paramDef}}`])
    return `${comment}\n${param};`
  });

  const hyperRef = seeDefHyperLink(defInfo.def)
  const typeTag = `@type {typeof ${defInfo.typeName}}`

  const docString = docComment(component.description! ? component.description : '', [typeTag, hyperRef])
  return `${docString}
module.exports = class ${defInfo.typeName} {
${indent(classFields.join('\n'), 1)}
}`
}


