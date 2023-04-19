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
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition.js';
import { DestinyActivityNavPointType } from '../DestinyActivityNavPointType.js';
/**
 * A specific "spot" referred to by a location. Only one of these can be active at
 * a time for a given Location.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyLocationReleaseDefinition}
*/
export interface DestinyLocationReleaseDefinition {
    /** Sadly, these don't appear to be populated anymore (ever?) */
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    readonly smallTransparentIcon: string;
    readonly mapIcon: string;
    readonly largeTransparentIcon: string;
    /**
     * If we had map information, this spawnPoint would be interesting. But sadly, we
     * don't have that info.
    */
    readonly spawnPoint: number;
    /**
     * The Destination being pointed to by this location. Mapped to
     * DestinyDestinationDefinition in the manifest.
    */
    readonly destinationHash: number;
    /**
     * The Activity being pointed to by this location. Mapped to
     * DestinyActivityDefinition in the manifest.
    */
    readonly activityHash: number;
    /** The Activity Graph being pointed to by this location. */
    readonly activityGraphHash: number;
    /**
     * The Activity Graph Node being pointed to by this location. (Remember that
     * Activity Graph Node hashes are only unique within an Activity Graph: so use the
     * combination to find the node being spoken of)
    */
    readonly activityGraphNodeHash: number;
    /**
     * The Activity Bubble within the Destination. Look this up in the
     * DestinyDestinationDefinition's bubbles and bubbleSettings properties.
    */
    readonly activityBubbleName: number;
    /**
     * If we had map information, this would tell us something cool about the path this
     * location wants you to take. I wish we had map information.
    */
    readonly activityPathBundle: number;
    /**
     * If we had map information, this would tell us about path information related to
     * destination on the map. Sad. Maybe you can do something cool with it. Go to town
     * man.
    */
    readonly activityPathDestination: number;
    /** The type of Nav Point that this represents. See the enumeration for more info. */
    readonly navPointType: DestinyActivityNavPointType;
    /**
     * Looks like it should be the position on the map, but sadly it does not look
     * populated... yet?
    */
    readonly worldPosition: number[];
}
