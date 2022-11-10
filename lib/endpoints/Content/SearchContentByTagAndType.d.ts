/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { BungieClient } from '../../util/client';
import { SearchResultOfContentItemPublicContract } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Content.SearchContentByTagAndType} */
export declare type SearchContentByTagAndTypeParams = {
    /** Page number for the search results starting with page 1. */
    currentpage?: number;
    /** Not used. */
    head?: boolean;
    /** Not used. */
    itemsperpage?: number;
    locale: string;
    tag: string;
    type: string;
};
/**
 * Searches for Content Items that match the given Tag and Content Type.
 * @see {@link https://bungie-net.github.io/#Content.SearchContentByTagAndType}
*/
export declare function SearchContentByTagAndType(this: BungieClient, params: SearchContentByTagAndTypeParams): Promise<BungieNetResponse<SearchResultOfContentItemPublicContract>>;
