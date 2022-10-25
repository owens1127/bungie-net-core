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
