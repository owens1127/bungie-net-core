import {OpenAPIObject} from 'openapi3-ts';
import {generateHeader, writeOutFile} from './generate-common.js';
import {DefInfo} from './util.js';

export function generateIndices(
    componentsByFile: { [p: string]: DefInfo[] },
    componentsByTag: { [p: string]: DefInfo[] },
    generics: string[],
    doc: OpenAPIObject) {
    generateSchemaIndex(componentsByFile, doc);
    generateEndpointsIndex(componentsByTag, doc);
    generateGenericIndex(generics, doc);
    generateSuperIndex(doc);
}

function generateSchemaIndex(
    componentsByFile: { [p: string]: DefInfo[] },
    doc: OpenAPIObject) {

    const filename = `generated-src/schemas/index.ts`;

    const schemaExports = Object.keys(componentsByFile).map(file => {
        const typesOnly: boolean = file.endsWith('.d.ts')
        return `export ${typesOnly ? 'type ' : ''}{ ${componentsByFile[file].map(component => {
            return component.typeName
        }).join(', ')} } from \'./${file.slice(8, typesOnly ? -5 : -3)}\';`;
    }).join('\n');

    const otherExports =`export type { SingleComponentResponse } from '../generics';
export type { DictionaryComponentResponse } from '../generics'`;


    const definition = [generateHeader(doc),schemaExports,otherExports].join('\n\n') + '\n';

    writeOutFile(filename, definition);
}

function generateGenericIndex(
    generics: string[],
    doc: OpenAPIObject) {

    const filename = `generated-src/generics/index.ts`;

    const exports = generics.map(name => {
        return `export * from \'./${name}\';`;
    }).join('\n');


    const definition = [generateHeader(doc),exports].join('\n\n') + '\n';

    writeOutFile(filename, definition);
}

function generateEndpointsIndex(
    componentsByTag: { [p: string]: DefInfo[] },
    doc: OpenAPIObject) {

    const filename = `generated-src/endpoints/index.ts`;

    const endpointExports = Object.keys(componentsByTag).map(tag => {
        return `export * as ${tag} from \'./${tag}\';`
    }).join('\n');

    const otherExports =`export type { HttpClientConfig, HttpClient } from '../http';
export type { ServerResponse } from '../generics'`;


    const definition = [generateHeader(doc),endpointExports,otherExports].join('\n\n') + '\n';

    writeOutFile(filename, definition);
}

function generateSuperIndex(doc: OpenAPIObject) {

    const filename = `generated-src/index.ts`;

    const schemas = `export * as Schemas from './schemas'`

    const endpoints = `export * as Endpoints from './endpoints'`

    const manifestExport = `export * as Manifest from './manifest';`


    const definition = [
        generateHeader(doc),
        schemas,
        manifestExport,
        endpoints].join('\n');

    writeOutFile(filename, definition);
}
