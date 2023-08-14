import { OpenAPIObject } from 'openapi3-ts';
import {
  docComment,
  generateHeader,
  writeOutFile
} from './generate-common.mjs';
import { DefInfo, getRef } from './util.mjs';

export function generateIndices(
  componentsByTag: { [p: string]: DefInfo[] },
  doc: OpenAPIObject,
  componentsByFile: Map<string, DefInfo>
) {
  generateSchemaIndex(doc, componentsByFile);
  generateEndpointsSuperIndex(componentsByTag, doc);
}

function generateSchemaIndex(
  doc: OpenAPIObject,
  componentsByFile: Map<string, DefInfo>
) {
  const models: string[] = [];
  const enums: string[] = [];

  for (const [path, defInfo] of componentsByFile) {
    const [arr, str] = path.includes('models')
      ? [models, 'models']
      : [enums, 'enums'];
    arr.push(
      `export ${getRef(doc, defInfo.def)?.enum ? '' : 'type '}{ ${
        defInfo.typeName
      } } from '${path.replace(`${str}/`, './').replace('.ts', '')}';`
    );
  }

  const definition = (exps: string[]) =>
    [generateHeader(doc), exps.join('\n')].join('\n\n') + '\n';

  writeOutFile('src/models/index.ts', definition(models));
  writeOutFile('src/enums/index.ts', definition(enums));
}

function generateEndpointsSuperIndex(
  componentsByTag: { [p: string]: DefInfo[] },
  doc: OpenAPIObject
) {
  const filename = 'src/endpoints/index.ts';
  const exportLines: string[] = [];

  for (const exportName of Object.keys(componentsByTag)) {
    exportLines.push(`export * as ${exportName} from './${exportName}';`);
  }
  const exportHeader = exportLines.join('\n');

  const definition = [generateHeader(doc), exportHeader].join('\n\n') + '\n';

  writeOutFile(filename, definition);
}
