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
import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinySeasonPreviewDefinition } from './DestinySeasonPreviewDefinition';
/**
 * Defines a canonical "Season" of Destiny: a range of a few months where the game
 * highlights certain challenges, provides new loot, has new Clan-related rewards
 * and celebrates various seasonal events.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Seasons.DestinySeasonDefinition}
*/
export interface DestinySeasonDefinition {
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    readonly backgroundImagePath: string;
    readonly seasonNumber: number;
    readonly startDate?: string;
    readonly endDate?: string;
    /** Mapped to DestinySeasonPassDefinition in the manifest. */
    readonly seasonPassHash?: number;
    /** Mapped to DestinyProgressionDefinition in the manifest. */
    readonly seasonPassProgressionHash?: number;
    /** Mapped to DestinyInventoryItemDefinition in the manifest. */
    readonly artifactItemHash?: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly sealPresentationNodeHash?: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly seasonalChallengesPresentationNodeHash?: number;
    /**
     * Optional - Defines the promotional text, images, and links to preview this
     * season.
    */
    readonly preview: DestinySeasonPreviewDefinition;
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
