import { OpenAPIObject } from 'openapi3-ts';
import { generateHeader, writeOutFile } from './generate-common.mjs';

export function generateTestStub(
  tag: string,
  endpointName: string,
  doc: OpenAPIObject,
  argumentsList: string[]
): void {
  const filename = `__test__/api/${tag}/${endpointName}.test.ts`;
  const tests = generateTestsDefinition(tag, endpointName, argumentsList);
  const definition = [generateHeader(doc), tests].join('\n\n') + '\n';
  writeOutFile(filename, definition);
}

function generateTestsDefinition(
  tag: string,
  endpointName: string,
  argumentsList: string[]
): string {
  const imports = [
    `import { UnwrapPromise, sharedTestClient } from '../../global-setup'`,
    `import { ${endpointName}Tests } from '../../${tag}'`,
    `import { describe, test, it, expect } from '@jest/globals';`,
    `import { ${endpointName} } from '../../../src/endpoints/${tag}';`
  ].join('\n');

  const types = `type ResponseType = UnwrapPromise<ReturnType<typeof ${endpointName}>>;`;
  const tests = `describe('${tag}.${endpointName}', () => { 
  it('to exist', () => { 
    expect(${endpointName}).toBeDefined();
  })

  ${endpointName}Tests.map(({ name, data, promise: { failure, success } }) => (
    ${testCase(endpointName, tag, argumentsList)}
  ));
})`;
  return [imports, types, tests].join('\n\n');
}

function testCase(
  endpoint: string,
  tag: string,
  argumentsList: string[]
): string {
  return `test(name, async () => {
        let res: ResponseType;
        try {
            res = await ${endpoint}(${argumentsList
    .map((_, idx) => `data[${idx}]`)
    .join(', ')}, sharedTestClient)
            expect(res).toHaveProperty('Response');
        } catch (e) {
            expect(failure).not.toBeUndefined();
            return failure!(e as Error)
        }
        expect(success).not.toBeUndefined();
        return success!(res) 
    })`;
}
