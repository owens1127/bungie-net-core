/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyStatsGroupType } from './DestinyStatsGroupType';
import { PeriodType } from './PeriodType';
import { DestinyActivityModeType } from './DestinyActivityModeType';
import { DestinyStatsCategoryType } from './DestinyStatsCategoryType';
import { UnitType } from './UnitType';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.DestinyHistoricalStatsDefinition} */
export interface DestinyHistoricalStatsDefinition {
    /** Unique programmer friendly ID for this stat */
    readonly statId: string;
    /** Statistic group */
    readonly group: DestinyStatsGroupType;
    /** Time periods the statistic covers */
    readonly periodTypes: PeriodType[];
    /** Game modes where this statistic can be reported. */
    readonly modes: DestinyActivityModeType[];
    /** Category for the stat. */
    readonly category: DestinyStatsCategoryType;
    /** Display name */
    readonly statName: string;
    /** Display name abbreviated */
    readonly statNameAbbr: string;
    /** Description of a stat if applicable. */
    readonly statDescription: string;
    /** Unit, if any, for the statistic */
    readonly unitType: UnitType;
    /** Optional URI to an icon for the statistic */
    readonly iconImage: string;
    /** Optional icon for the statistic */
    readonly mergeMethod?: number;
    /** Localized Unit Name for the stat. */
    readonly unitLabel: string;
    /** Weight assigned to this stat indicating its relative impressiveness. */
    readonly weight: number;
    /**
     * The tier associated with this medal - be it implicitly or explicitly. Mapped to
     * DestinyMedalTierDefinition in the manifest.
    */
    readonly medalTierHash?: number;
}
