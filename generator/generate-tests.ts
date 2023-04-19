import { OpenAPIObject } from 'openapi3-ts';
import { generateHeader, writeOutFile } from './generate-common.js';

export function generateTestStub(
  tag: string,
  endpointName: string,
  doc: OpenAPIObject,
  argumentsList: string[]
): void {
  const filename = `__test__/endpoints/${tag}/${endpointName}.test.ts`;
  const tests = generateTestsDefinition(tag, endpointName, argumentsList);
  const definition = [generateHeader(doc), tests].join('\n\n') + '\n';
  writeOutFile(filename, definition);
}

function generateTestsDefinition(
  tag: string,
  endpointName: string,
  argumentsList: string[]
): string {
  const imports = `import { client } from '../../index';
import { ${endpointName}Tests } from '../../${tag}';
import { test } from '@jest/globals';`;
  const tests = `if (${endpointName}Tests.length) { 
    ${endpointName}Tests.map(tc => (
    ${testCase(endpointName, tag, argumentsList)}
));
} else {
    test('${tag}.${endpointName} is not tested', () => { expect(1).toEqual(1) })
}`;
  return [imports, tests].join('\n\n');
}

function testCase(endpoint: string, tag: string, argumentsList: string[]): string {
  return `test(tc.name, async () => {
        let res;
        try {
            res = await client.${tag}.${endpoint}(${argumentsList
    .map((_, idx) => `tc.data[${idx}]`)
    .join(', ')})
        } catch (e) {
            return tc.promise.failure?.(e as Error)
        }
        return tc.promise.success?.(res)
    })`;
}
