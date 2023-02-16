/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { GlobalAlert } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#.GetGlobalAlerts} */
export declare type GetGlobalAlertsParams = {
    /** Determines whether Streaming Alerts are included in results */
    includestreaming?: boolean;
};
/**
 * Gets any active global alert for display in the forum banners, help pages, etc.
 * Usually used for DOC alerts.
 * @see {@link https://bungie-net.github.io/#.GetGlobalAlerts}
*/
export declare function getGlobalAlerts(this: InstancedImport | AccessTokenObject | void, params: GetGlobalAlertsParams): Promise<BungieNetResponse<GlobalAlert[]>>;
