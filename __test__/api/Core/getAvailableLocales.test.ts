/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.4
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { client, UnwrapPromise } from '../../index';
import { getAvailableLocalesTests } from '../../Core';
import { describe, test, it, expect } from '@jest/globals';

type ResponseType = UnwrapPromise<ReturnType<typeof client.Core.getAvailableLocales>>;

describe('Core.getAvailableLocales', () => { 
  it('to exist', () => { 
    expect(client.Core.getAvailableLocales).toBeInstanceOf(Function);
  })

  getAvailableLocalesTests.map(({ name, data, promise: { failure, success } }) => (
    test(name, async () => {
        let res: ResponseType;
        try {
            res = await client.Core.getAvailableLocales()
            expect(res).toMatchObject({
              Response: expect.any(Object)
            });
        } catch (e) {
            expect(failure).not.toBeUndefined();
            return failure!(e as Error)
        }
        expect(success).not.toBeUndefined();
        return success!(res) 
    })
  ));
})
