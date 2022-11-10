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
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyPublicMilestoneVendor} */
export interface DestinyPublicMilestoneVendor {
    /**
     * The hash identifier of the Vendor related to this Milestone. You can show useful
     * things from this, such as thier Faction icon or whatever you might care about.
     * Mapped to DestinyVendorDefinition in the manifest.
    */
    readonly vendorHash: number;
    /**
     * If this vendor is featuring a specific item for this event, this will be the
     * hash identifier of that item. I'm taking bets now on how long we go before this
     * needs to be a list or some other, more complex representation instead and I
     * deprecate this too. I'm going to go with 5 months. Calling it now, 2017-09-14 at
     * 9:46pm PST. Mapped to DestinyInventoryItemDefinition in the manifest.
    */
    readonly previewItemHash?: number;
}
