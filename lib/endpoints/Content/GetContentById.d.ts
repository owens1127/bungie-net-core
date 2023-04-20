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
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { ContentItemPublicContract } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Content.GetContentById} */
export declare type GetContentByIdParams = {
    /** false */
    head?: boolean;
    id: string;
    locale: string;
};
/**
 * Returns a content item referenced by id
 * @see {@link https://bungie-net.github.io/#Content.GetContentById}
*/
export declare function getContentById(this: AccessTokenObject | void, params: GetContentByIdParams): Promise<BungieNetResponse<ContentItemPublicContract>>;
