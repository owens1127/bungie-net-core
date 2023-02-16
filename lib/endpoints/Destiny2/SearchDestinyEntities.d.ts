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
import { DestinyEntitySearchResult } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyEntities} */
export declare type SearchDestinyEntitiesParams = {
    /** Page number to return, starting with 0. */
    page?: number;
    /** The string to use when searching for Destiny entities. */
    searchTerm: string;
    /**
     * The type of entity for whom you would like results. These correspond to the
     * entity's definition contract name. For instance, if you are looking for items,
     * this property should be 'DestinyInventoryItemDefinition'.
    */
    type: string;
};
/**
 * Gets a page list of Destiny items.
 * @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyEntities}
*/
export declare function searchDestinyEntities(this: InstancedImport | AccessTokenObject | void, params: SearchDestinyEntitiesParams): Promise<BungieNetResponse<DestinyEntitySearchResult>>;
