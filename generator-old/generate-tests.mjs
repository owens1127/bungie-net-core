import { generateHeader, writeOutFile } from './generate-common.mjs';
export function generateTestStub(tag, endpointName, doc, argumentsList) {
    const filename = `__test__/__api__/${tag}/${endpointName}.test.ts`;
    const tests = generateTestsDefinition(tag, endpointName, argumentsList);
    const definition = [generateHeader(doc), tests].join('\n\n') + '\n';
    writeOutFile(filename, definition);
}
function generateTestsDefinition(tag, endpointName, argumentsList) {
    const imports = [
        `import { sharedTestClient, ResponseType } from '../../global-setup'`,
        `import { ${endpointName}Tests } from '../../${tag}'`,
        `import { describe, test, it, expect } from '@jest/globals';`,
        `import { ${endpointName} } from '../../../src/endpoints/${tag}';`,
        `import { BungieAPIError } from '../../../src/errors/BungieAPIError';`
    ].join('\n');
    const tests = `describe('${tag}.${endpointName}', () => { 
  test('the endpoint exists', () => { 
    expect(${endpointName}).toBeDefined();
  })

  ${endpointName}Tests.map(({ name, data, promise: { failure, success } }) => (
    ${testCase(endpointName, argumentsList)}
  ));
})`;
    return [imports, tests].join('\n\n');
}
function testCase(endpoint, argumentsList) {
    return `describe(name, () => {
        let res: ResponseType<typeof ${endpoint}> | null = null;
        let err: unknown | null = null;
        
        beforeAll(async () => {
          try {
            res = await ${endpoint}(${[
        ...argumentsList.map((_, idx) => `data[${idx}]`),
        'sharedTestClient'
    ].join(', ')})
          } catch (e) {
            err = e
          }
        });

        if (success) {
          it("is expected to succeed", () => {
            expect(res).not.toBeNull();
          })
          it("is a valid response", () => {
            expect(res).toHaveProperty('ErrorCode');
            expect(res!.ErrorCode).toEqual(1);
            expect(res).toHaveProperty('Response');
          })
          test("it returns the correct data", () => success!(res!))
        }

        if (failure) {
          it("is expected to error", () => {
            expect(err).not.toBeNull();
          })
          it("is a Bungie error", () => {
            expect(err).toBeInstanceOf(BungieAPIError);
          })
          test("it throws the correct error", () => failure!(err as BungieAPIError<ReturnType<typeof ${endpoint}>>))
        }
    })`;
}
