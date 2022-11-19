import {OpenAPIObject, ReferenceObject, RequestBodyObject, SchemaObject} from 'openapi3-ts';
import _ from 'underscore';
import path from "path";

export interface DefInfo {
    def: string;
    tags: string[];
    filename: string;
    typeName: string;
}

export function resolveSchemaType(
    schema: SchemaObject | ReferenceObject,
    doc: OpenAPIObject,
    importFiles: Map<string, string>,
    componentByDef?: { [def: string]: DefInfo }
): string {

    if (isReferenceObject(schema)) {
        return typeNameImports(schema.$ref, doc, importFiles);
    } else if ('x-enum-reference' in schema) {
        const ref = schema['x-enum-reference'].$ref
        return typeNameImports(ref, doc, importFiles);
    } else {
        return typeMapping(schema, doc, importFiles!, componentByDef);
    }
}

export function typeMapping(
    schema: SchemaObject,
    doc: OpenAPIObject,
    importFiles: Map<string, string>,
    componentByDef?: { [def: string]: DefInfo }
): string {
    switch (schema.type) {
        case 'string':
            return schema.format === 'byte' ? 'number' : 'string';
        case 'integer':
            // JS can't represent a 64-bit int as a number, so bungie.net returns it as a string in JSON
            return schema.format === 'int64' ? 'string' : 'number';

        case 'array':
            return resolveSchemaType(schema.items!, doc, importFiles) + '[]';
        case 'object':
            if (schema.allOf) {
                return resolveSchemaType(schema.allOf[0], doc, importFiles);
            } else if (
                schema.additionalProperties &&
                schema['x-dictionary-key'] &&
                typeof schema.additionalProperties !== 'boolean'
            ) {
                const keySchema: SchemaObject | ReferenceObject = schema['x-dictionary-key'];
                const key = isReferenceObject(keySchema) ? 'number' : resolveSchemaType(keySchema, doc, importFiles, componentByDef);
                const val = resolveSchemaType(schema.additionalProperties, doc, importFiles, componentByDef);
                const keyExp = key === 'number' || key === 'string' ? `key: ${key}` : `key in ${key}`;
                return `{ [${keyExp}]: ${val} }`;
            }
    }

    return schema.type!;
}

export function getReferencedTypes(schema: SchemaObject | ReferenceObject): string | undefined {
    //console.log(schema)
    if (isReferenceObject(schema)) {
        return schema.$ref;
    } else if (schema['x-enum-reference']) {
        return schema['x-enum-reference'].$ref;
    } else if (schema.items) {
        return getReferencedTypes(schema.items!);
    } else if (schema.allOf) {
        return getReferencedTypes(schema.allOf[0]);
    } else if (schema.additionalProperties && typeof schema.additionalProperties !== 'boolean') {
        return getReferencedTypes(schema.additionalProperties);
    }
}

export function lcFirst(name: string): string {
    return name[0].toLowerCase() + name.substring(1);
}

export function lastPart(name: string): string {
    return _.last(name.split(/[\.\/]/))!;
}

export function getRef(doc: OpenAPIObject, ref: string): SchemaObject | undefined {
    const path = ref.replace('#/', '').split('/');
    let result = doc;
    let pathSegment = path.shift();
    while (pathSegment) {
        result = result[pathSegment];
        pathSegment = path.shift();
    }
    if (!result) {
        return undefined;
    }
    if (result.content) {
        return result.content['application/json'].schema;
    } else {
        return result;
    }
}

export function typeName(componentPath: string, doc: OpenAPIObject) {
    const name = lastPart(componentPath);
    const component = getRef(doc, componentPath);
    if (!component) {
        return 'any';
    }
    return name;

}

export function typeNameImports(componentPath: string, doc: OpenAPIObject, importFiles: Map<string, string>) {
    const name = lastPart(componentPath);
    const component = getRef(doc, componentPath);

    if (!component) {
        return 'any';
    }

    if (componentPath.includes('/responses/')) {
        const property = component.properties!.Response;
        if (property) {
            return resolveSchemaType(property, doc, importFiles);
        }
    }

    if (name !== 'int64' && name !== 'int32' && name !== 'boolean') {
        importFiles.set(name, componentPath);
    }
    return name;

}

export function isRequestBodyObject(
    requestBody: RequestBodyObject | ReferenceObject
): requestBody is RequestBodyObject {
    return (requestBody as RequestBodyObject).content !== undefined;
}

export function isReferenceObject(
    schema: SchemaObject | ReferenceObject
): schema is ReferenceObject {
    return (schema as ReferenceObject).$ref !== undefined;
}

export function importPath(
    componentPath: string,
    importInto: string): string {
    let absImportFrom = importInto.replace(/\./g, '/');
    let absImportTo = componentPath.replace(/\./g, '/');
    if (absImportTo === absImportFrom) {
        return lastPart(importInto);
    }
    let relativePath = path.relative(path.dirname(absImportFrom), absImportTo);
    if (!relativePath.startsWith('.')) {
        relativePath = './' + relativePath;
    }
    if (path.sep === '\\') relativePath = relativePath.replace(/\\/g, '/');
    //console.log(absImportTo, absImportFrom, relativePath)
    return relativePath;
}
