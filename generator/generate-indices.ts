import {OpenAPIObject} from 'openapi3-ts';
import {generateHeader, writeOutFile} from './generate-common.js';
import {DefInfo} from './util.js';
import _ from "underscore";
import exp from "constants";

export function generateIndices(
    componentsByTag: { [p: string]: DefInfo[] },
    directoryExportsMap: Map<string, Set<string>>,
    doc: OpenAPIObject) {
    generateSchemaIndices(directoryExportsMap, doc);
    generateEndpointsIndex(componentsByTag, doc);
}

function generateSchemaIndices(
    directoryExportsMap: Map<string, Set<string>>,
    doc: OpenAPIObject) {

    directoryExportsMap.forEach((exports, filePath) => {
        const filename = 'lib/' + filePath + '/index.js';

        const exportLines = [];
        for (const exportName of exports) {
            exportLines.push(`exports.${exportName} = require('./${exportName}');`);
        }
        const exportHeader = exportLines.join('\n');

        const definition = [generateHeader(doc),exportHeader].join('\n\n') + '\n';
        writeOutFile(filename, definition);
    })
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
