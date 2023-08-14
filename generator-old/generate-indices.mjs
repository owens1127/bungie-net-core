import { generateHeader, writeOutFile } from './generate-common.mjs';
import { getRef } from './util.mjs';
export function generateIndices(componentsByTag, doc, componentsByFile) {
    generateSchemaIndex(doc, componentsByFile);
    generateEndpointsSuperIndex(componentsByTag, doc);
}
function generateSchemaIndex(doc, componentsByFile) {
    const models = [];
    const enums = [];
    for (const [path, defInfo] of componentsByFile) {
        const [arr, str] = path.includes('models')
            ? [models, 'models']
            : [enums, 'enums'];
        arr.push(`export ${getRef(doc, defInfo.def)?.enum ? '' : 'type '}{ ${defInfo.typeName} } from '${path.replace(`${str}/`, './').replace('.ts', '')}';`);
    }
    const definition = (exps) => [generateHeader(doc), exps.join('\n')].join('\n\n') + '\n';
    writeOutFile('src/models/index.ts', definition(models));
    writeOutFile('src/enums/index.ts', definition(enums));
}
function generateEndpointsSuperIndex(componentsByTag, doc) {
    const filename = 'src/endpoints/index.ts';
    const exportLines = [];
    for (const exportName of Object.keys(componentsByTag)) {
        exportLines.push(`export * as ${exportName} from './${exportName}';`);
    }
    const exportHeader = exportLines.join('\n');
    const definition = [generateHeader(doc), exportHeader].join('\n\n') + '\n';
    writeOutFile(filename, definition);
}
