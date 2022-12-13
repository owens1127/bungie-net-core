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
/**
 * Represents a status string that could be conditionally displayed about an
 * activity. Note that externally, you can only see the strings themselves.
 * Internally we combine this information with server state to determine which
 * strings should be shown.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityUnlockStringDefinition}
*/
export interface DestinyActivityUnlockStringDefinition {
    /** The string to be displayed if the conditions are met. */
    readonly displayString: string;
}
