import {OpenAPIObject} from 'openapi3-ts';
import {docComment, generateHeader, writeOutFile} from './generate-common.js';
import {DefInfo, getRef} from './util.js';

export function generateIndices(
    componentsByTag: { [p: string]: DefInfo[] },
    directoryExportsMap: Map<string, Set<string>>,
    doc: OpenAPIObject,
    enumsByName: Set<string>
) {
    generateSchemaIndices(directoryExportsMap, doc, enumsByName);
    generateEndpointsSuperIndex(componentsByTag, doc);
}

function generateSchemaIndices(
    directoryExportsMap: Map<string, Set<string>>,
    doc: OpenAPIObject,
    enumsByName: Set<string>) {

    directoryExportsMap.forEach((exports, filePath) => {
        const filename = 'lib/' + filePath + '/index.js';

        const exportLines = [];
        for (const exp of exports) {
            let name;
            if (exp.endsWith('.js')) {
                name = exp.substring(0, exp.length-3);
                if (!enumsByName.has(exp)) exportLines.push(docComment('', [`@type ${name}`]));
            }
             else {
                name = exp;
            }

            exportLines.push(`exports.${name} = require('./${name}');`);
        }
        const exportHeader = exportLines.join('\n');

        const definition = [generateHeader(doc),exportHeader].join('\n\n') + '\n';
        writeOutFile(filename, definition);
    })
}

function generateEndpointsSuperIndex(componentsByTag: { [p: string]: DefInfo[] }, doc: OpenAPIObject) {
    const filename = 'lib/endpoints/index.js';
    const exportLines = [];

    for (const exportName of Object.keys(componentsByTag)) {
        exportLines.push(`exports.${exportName} = require('./${exportName}');`);
    }
    const exportHeader = exportLines.join('\n');

    const definition = [generateHeader(doc),exportHeader].join('\n\n') + '\n';

    writeOutFile(filename, definition);
}
