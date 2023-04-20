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
import { DestinyCollectibleState } from '../../DestinyCollectibleState';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Collectibles.DestinyCollectibleComponent} */
export interface DestinyCollectibleComponent {
    /**
     * This enum represents a set of flags - use bitwise operators to check which of
     * these match your value.
    */
    readonly state: DestinyCollectibleState;
}
