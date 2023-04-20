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
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
/**
 * Unlock Flags are small bits (literally, a bit, as in a boolean value) that the
 * game server uses for an extremely wide range of state checks, progress storage,
 * and other interesting tidbits of information.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyUnlockDefinition}
*/
export interface DestinyUnlockDefinition {
    /**
     * Sometimes, but not frequently, these unlock flags also have human readable
     * information: usually when they are being directly tested for some requirement,
     * in which case the string is a localized description of why the requirement check
     * failed.
    */
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of
     * entity, but not globally.
     *
     * When entities refer to each other in Destiny content, it is this hash that they
     * are referring to.
    */
    readonly hash: number;
    /** The index of the entity as it was found in the investment tables. */
    readonly index: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination,
     * but BNet is not yet allowed to show it. Sorry!
    */
    readonly redacted: boolean;
}
