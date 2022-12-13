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
 * I know this doesn't look like a Flags Enumeration/bitmask right now, but I
 * assure you it is. This is the possible states that a Presentation Node can be in,
 * and it is almost certain that its potential states will increase in the future.
 * So don't treat it like a straight up enumeration.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationNodeState}
*/
export declare const enum DestinyPresentationNodeState {
    None = 0,
    /**
     * If this is set, the game recommends that you not show this node. But you know
     * your life, do what you've got to do.
    */
    Invisible = 1,
    /** Turns out Presentation Nodes can also be obscured. If they are, this is set. */
    Obscured = 2
}
