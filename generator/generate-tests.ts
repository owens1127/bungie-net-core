import { OpenAPIObject } from 'openapi3-ts';
import { generateHeader, writeOutFile } from './generate-common.js';

export function generateTestStub(
    tag: string,
    endpointName: string,
    doc: OpenAPIObject,
    argumentsList: string[]
): void {
    const filename = `test/${tag}/${endpointName}.test.ts`;
    const tests = generateTestsDefinition(tag, endpointName, argumentsList);
    const definition = [generateHeader(doc), tests].join('\n\n') + '\n';
    writeOutFile(filename, definition);
}

function generateTestsDefinition(
  tag: string,
  endpointName: string,
  argumentsList: string[]
): string {
    const imports = `import { ${endpointName} } from '../../lib-ts/endpoints/${tag}';
import { ${endpointName}Test as testCases } from '../../test-src/${tag}';
import { test } from '@jest/globals';`;
    const tests = `testCases.map(tc => (
    ${testCase(endpointName, argumentsList)}
));`
    return [imports, tests].join('\n\n');
}

function testCase(endpoint: string, argumentsList: string[]): string {
    return `test(tc.name, async () => {
        let res;
        try {
            res = await ${endpoint}(${argumentsList.map(arg => `tc.${arg}`).join(', ')})
        } catch (e) {
            return tc.promise.failure(e)
        }
        return tc.promise.success(res)
    })`
}
