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
import { DestinyProfileTransitoryPartyMember } from './DestinyProfileTransitoryPartyMember';
import { DestinyProfileTransitoryCurrentActivity } from './DestinyProfileTransitoryCurrentActivity';
import { DestinyProfileTransitoryJoinability } from './DestinyProfileTransitoryJoinability';
import { DestinyProfileTransitoryTrackingEntry } from './DestinyProfileTransitoryTrackingEntry';
/**
 * This is an experimental set of data that Bungie considers to be "transitory" -
 * information that may be useful for API users, but that is coming from a non-
 * authoritative data source about information that could potentially change at a
 * more frequent pace than Bungie.net will receive updates about it.
 *
 * This information is provided exclusively for convenience should any of it be
 * useful to users: we provide no guarantees to the accuracy or timeliness of data
 * that comes from this source. Know that this data can potentially be out-of-date
 * or even wrong entirely if the user disconnected from the game or suddenly
 * changed their status before we can receive refreshed data.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Profiles.DestinyProfileTransitoryComponent}
*/
export interface DestinyProfileTransitoryComponent {
    /**
     * If you have any members currently in your party, this is some (very) bare-bones
     * information about those members.
    */
    readonly partyMembers: DestinyProfileTransitoryPartyMember[];
    /**
     * If you are in an activity, this is some transitory info about the activity
     * currently being played.
    */
    readonly currentActivity: DestinyProfileTransitoryCurrentActivity;
    /**
     * Information about whether and what might prevent you from joining this person on
     * a fireteam.
    */
    readonly joinability: DestinyProfileTransitoryJoinability;
    /** Information about tracked entities. */
    readonly tracking: DestinyProfileTransitoryTrackingEntry[];
    /**
     * The hash identifier for the DestinyDestinationDefinition of the last location
     * you were orbiting when in orbit. Mapped to DestinyDestinationDefinition in the
     * manifest.
    */
    readonly lastOrbitedDestinationHash?: number;
}
