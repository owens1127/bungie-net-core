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
import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyColor } from '../../Misc/DestinyColor';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Social.DestinySocialCommendationDefinition} */
export interface DestinySocialCommendationDefinition {
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    readonly cardImagePath: string;
    readonly color: DestinyColor;
    readonly displayPriority: number;
    readonly activityGivingLimit: number;
    /** Mapped to DestinySocialCommendationNodeDefinition in the manifest. */
    readonly parentCommendationNodeHash: number;
    /**
     * The display properties for the the activities that this commendation is
     * available in.
    */
    readonly displayActivities: DestinyDisplayPropertiesDefinition[];
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
