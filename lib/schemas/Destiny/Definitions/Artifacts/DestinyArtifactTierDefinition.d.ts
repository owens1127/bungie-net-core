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
import { DestinyArtifactTierItemDefinition } from './DestinyArtifactTierItemDefinition';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Artifacts.DestinyArtifactTierDefinition} */
export interface DestinyArtifactTierDefinition {
    /** An identifier, unique within the Artifact, for this specific tier. */
    readonly tierHash: number;
    /** The human readable title of this tier, if any. */
    readonly displayTitle: string;
    /**
     * A string representing the localized minimum requirement text for this Tier, if
     * any.
    */
    readonly progressRequirementMessage: string;
    /** The items that can be earned within this tier. */
    readonly items: DestinyArtifactTierItemDefinition[];
    /**
     * The minimum number of "unlock points" that you must have used before you can
     * unlock items from this tier.
    */
    readonly minimumUnlockPointsUsedRequirement: number;
}
