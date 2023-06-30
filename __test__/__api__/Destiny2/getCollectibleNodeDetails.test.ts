/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { sharedTestClient, ResponseType } from '../../global-setup'
import { getCollectibleNodeDetailsTests } from '../../Destiny2'
import { describe, test, it, expect } from '@jest/globals';
import { getCollectibleNodeDetails } from '../../../src/endpoints/Destiny2';
import { BungieAPIError } from '../../../src/errors/BungieAPIError';

describe('Destiny2.getCollectibleNodeDetails', () => { 
  test('the endpoint exists', () => { 
    expect(getCollectibleNodeDetails).toBeDefined();
  })

  getCollectibleNodeDetailsTests.map(({ name, data, promise: { failure, success } }) => (
    describe(name, () => {
        let res: ResponseType<typeof getCollectibleNodeDetails> | null = null;
        let err: unknown | null = null;
        
        beforeAll(async () => {
          try {
            res = await getCollectibleNodeDetails(data[0], sharedTestClient)
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
          test("it throws the correct error", () => failure!(err as BungieAPIError<ReturnType<typeof getCollectibleNodeDetails>>))
        }
    })
  ));
})