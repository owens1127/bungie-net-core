/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { client, UnwrapPromise } from '../../global-setup';
import { getBungieRewardsListTests } from '../../Tokens';
import { describe, test, it, expect } from '@jest/globals';
import { BungieClient } from '../../../src';

type ResponseType = UnwrapPromise<ReturnType<typeof client.Tokens.getBungieRewardsList>>;

describe('Tokens.getBungieRewardsList', () => { 
  it('to exist', () => { 
    expect(client.Tokens.getBungieRewardsList).toBeDefined();
  })

  getBungieRewardsListTests.map(({ name, data, promise: { failure, success } }) => (
    test(name, async () => {
        let res: ResponseType;
        try {
            res = await client.Tokens.getBungieRewardsList()
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
