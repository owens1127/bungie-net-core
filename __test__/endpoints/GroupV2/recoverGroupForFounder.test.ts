/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { client } from '../../index';
import { recoverGroupForFounderTests } from '../../GroupV2';
import { test } from '@jest/globals';

if (recoverGroupForFounderTests.length) { 
    recoverGroupForFounderTests.map(tc => (
    test(tc.name, async () => {
        let res;
        try {
            res = await client.GroupV2.recoverGroupForFounder(tc.data[0])
        } catch (e) {
            return tc.promise.failure?.(e as Error)
        }
        return tc.promise.success?.(res)
    })
));
} else {
    test('GroupV2.recoverGroupForFounder is not tested', () => { expect(1).toEqual(1) })
}
