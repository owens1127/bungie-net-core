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

import { client, UnwrapPromise } from '../../global-setup';
import { editFounderOptionsTests } from '../../GroupV2';
import { describe, test, it, expect } from '@jest/globals';

type ResponseType = UnwrapPromise<ReturnType<typeof client.GroupV2.editFounderOptions>>;

describe('GroupV2.editFounderOptions', () => { 
  it('to exist', () => { 
    expect(client.GroupV2.editFounderOptions).toBeDefined();
  })

  editFounderOptionsTests.map(({ name, data, promise: { failure, success } }) => (
    test(name, async () => {
        let res: ResponseType;
        try {
            res = await client.GroupV2.editFounderOptions(data[0], data[1])
            expect(res).toHaveProperty('Response');
        } catch (e) {
            expect(failure).not.toBeUndefined();
            return failure!(e as Error)
        }
        expect(success).not.toBeUndefined();
        return success!(res) 
    })
  ));
})
