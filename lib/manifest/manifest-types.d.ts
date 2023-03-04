/**
 * These definitions and helper functions are based off the structure of DestinyManifest
 * in the bungie.net API spec, but are not explicitly defined endpoints in the spec.
 */
import {
    DestinyProgressionDefinition,
    DestinyInventoryItemDefinition,
    DestinyCollectibleDefinition,
    DestinyMaterialRequirementSetDefinition,
    DestinyPresentationNodeDefinition,
    DestinyObjectiveDefinition,
    DestinyLocationDefinition,
    DestinyVendorDefinition,
    DestinyFactionDefinition,
    DestinyDestinationDefinition,
    DestinyPlaceDefinition,
    DestinyActivityDefinition,
    DestinyActivityTypeDefinition,
    DestinyActivityModifierDefinition,
    DestinyActivityModeDefinition,
    DestinyActivityGraphDefinition,
    DestinyEquipmentSlotDefinition,
    DestinyInventoryBucketDefinition,
    DestinySocketTypeDefinition,
    DestinySocketCategoryDefinition,
    DestinyVendorGroupDefinition,
    DestinySandboxPerkDefinition,
    DestinyDamageTypeDefinition,
    DestinyStatDefinition,
    DestinyRecordDefinition,
    DestinyLoreDefinition,
    DestinyGenderDefinition,
    DestinyTraitDefinition,
    DestinyMetricDefinition,
    DestinyItemTierTypeDefinition,
    DestinyStatGroupDefinition,
    DestinySandboxPatternDefinition,
    DestinyClassDefinition,
    DestinyArtifactDefinition,
    DestinyProgressionLevelRequirementDefinition,
    DestinyPowerCapDefinition,
    DestinyRewardSourceDefinition,
    DestinyEnergyTypeDefinition,
    DestinyPlugSetDefinition,
    DestinyTalentGridDefinition,
    DestinyItemCategoryDefinition,
    DestinyBreakerTypeDefinition,
    DestinySeasonDefinition,
    DestinySeasonPassDefinition,
    DestinyEventCardDefinition,
    DestinyGuardianRankDefinition,
    DestinyChecklistDefinition,
    DestinySocialCommendationNodeDefinition,
    DestinySocialCommendationDefinition,
    DestinyRaceDefinition,
    DestinyLoadoutColorDefinition,
    DestinyLoadoutIconDefinition,
    DestinyLoadoutNameDefinition,
    DestinyMilestoneDefinition,
    DestinyUnlockDefinition,
    DestinyReportReasonCategoryDefinition,
    DestinyMedalTierDefinition,
    DestinyLoadoutConstantsDefinition,
    DestinyGuardianRankConstantsDefinition
} from '../schemas';
/**
 * this describes a big object holding several tables of hash-keyed DestinyDefinitions.
 * this is roughly what you get if you decode the gigantic, single-json manifest blob,
 * but also just what we use here to dole out single-table, typed definitions
 */
export interface AllDestinyManifestComponents {
    DestinyProgressionDefinition: {
        [key: number]: DestinyProgressionDefinition;
    };
    DestinyInventoryItemDefinition: {
        [key: number]: DestinyInventoryItemDefinition;
    };
    DestinyCollectibleDefinition: {
        [key: number]: DestinyCollectibleDefinition;
    };
    DestinyMaterialRequirementSetDefinition: {
        [key: number]: DestinyMaterialRequirementSetDefinition;
    };
    DestinyPresentationNodeDefinition: {
        [key: number]: DestinyPresentationNodeDefinition;
    };
    DestinyObjectiveDefinition: {
        [key: number]: DestinyObjectiveDefinition;
    };
    DestinyLocationDefinition: {
        [key: number]: DestinyLocationDefinition;
    };
    DestinyVendorDefinition: {
        [key: number]: DestinyVendorDefinition;
    };
    DestinyFactionDefinition: {
        [key: number]: DestinyFactionDefinition;
    };
    DestinyDestinationDefinition: {
        [key: number]: DestinyDestinationDefinition;
    };
    DestinyPlaceDefinition: {
        [key: number]: DestinyPlaceDefinition;
    };
    DestinyActivityDefinition: {
        [key: number]: DestinyActivityDefinition;
    };
    DestinyActivityTypeDefinition: {
        [key: number]: DestinyActivityTypeDefinition;
    };
    DestinyActivityModifierDefinition: {
        [key: number]: DestinyActivityModifierDefinition;
    };
    DestinyActivityModeDefinition: {
        [key: number]: DestinyActivityModeDefinition;
    };
    DestinyActivityGraphDefinition: {
        [key: number]: DestinyActivityGraphDefinition;
    };
    DestinyEquipmentSlotDefinition: {
        [key: number]: DestinyEquipmentSlotDefinition;
    };
    DestinyInventoryBucketDefinition: {
        [key: number]: DestinyInventoryBucketDefinition;
    };
    DestinySocketTypeDefinition: {
        [key: number]: DestinySocketTypeDefinition;
    };
    DestinySocketCategoryDefinition: {
        [key: number]: DestinySocketCategoryDefinition;
    };
    DestinyVendorGroupDefinition: {
        [key: number]: DestinyVendorGroupDefinition;
    };
    DestinySandboxPerkDefinition: {
        [key: number]: DestinySandboxPerkDefinition;
    };
    DestinyDamageTypeDefinition: {
        [key: number]: DestinyDamageTypeDefinition;
    };
    DestinyStatDefinition: {
        [key: number]: DestinyStatDefinition;
    };
    DestinyRecordDefinition: {
        [key: number]: DestinyRecordDefinition;
    };
    DestinyLoreDefinition: {
        [key: number]: DestinyLoreDefinition;
    };
    DestinyGenderDefinition: {
        [key: number]: DestinyGenderDefinition;
    };
    DestinyTraitDefinition: {
        [key: number]: DestinyTraitDefinition;
    };
    DestinyMetricDefinition: {
        [key: number]: DestinyMetricDefinition;
    };
    DestinyItemTierTypeDefinition: {
        [key: number]: DestinyItemTierTypeDefinition;
    };
    DestinyStatGroupDefinition: {
        [key: number]: DestinyStatGroupDefinition;
    };
    DestinySandboxPatternDefinition: {
        [key: number]: DestinySandboxPatternDefinition;
    };
    DestinyClassDefinition: {
        [key: number]: DestinyClassDefinition;
    };
    DestinyArtifactDefinition: {
        [key: number]: DestinyArtifactDefinition;
    };
    DestinyProgressionLevelRequirementDefinition: {
        [key: number]: DestinyProgressionLevelRequirementDefinition;
    };
    DestinyPowerCapDefinition: {
        [key: number]: DestinyPowerCapDefinition;
    };
    DestinyRewardSourceDefinition: {
        [key: number]: DestinyRewardSourceDefinition;
    };
    DestinyEnergyTypeDefinition: {
        [key: number]: DestinyEnergyTypeDefinition;
    };
    DestinyPlugSetDefinition: {
        [key: number]: DestinyPlugSetDefinition;
    };
    DestinyTalentGridDefinition: {
        [key: number]: DestinyTalentGridDefinition;
    };
    DestinyItemCategoryDefinition: {
        [key: number]: DestinyItemCategoryDefinition;
    };
    DestinyBreakerTypeDefinition: {
        [key: number]: DestinyBreakerTypeDefinition;
    };
    DestinySeasonDefinition: {
        [key: number]: DestinySeasonDefinition;
    };
    DestinySeasonPassDefinition: {
        [key: number]: DestinySeasonPassDefinition;
    };
    DestinyEventCardDefinition: {
        [key: number]: DestinyEventCardDefinition;
    };
    DestinyGuardianRankDefinition: {
        [key: number]: DestinyGuardianRankDefinition;
    };
    DestinyChecklistDefinition: {
        [key: number]: DestinyChecklistDefinition;
    };
    DestinySocialCommendationNodeDefinition: {
        [key: number]: DestinySocialCommendationNodeDefinition;
    };
    DestinySocialCommendationDefinition: {
        [key: number]: DestinySocialCommendationDefinition;
    };
    DestinyRaceDefinition: {
        [key: number]: DestinyRaceDefinition;
    };
    DestinyLoadoutColorDefinition: {
        [key: number]: DestinyLoadoutColorDefinition;
    };
    DestinyLoadoutIconDefinition: {
        [key: number]: DestinyLoadoutIconDefinition;
    };
    DestinyLoadoutNameDefinition: {
        [key: number]: DestinyLoadoutNameDefinition;
    };
    DestinyMilestoneDefinition: {
        [key: number]: DestinyMilestoneDefinition;
    };
    DestinyUnlockDefinition: {
        [key: number]: DestinyUnlockDefinition;
    };
    DestinyReportReasonCategoryDefinition: {
        [key: number]: DestinyReportReasonCategoryDefinition;
    };
    DestinyMedalTierDefinition: {
        [key: number]: DestinyMedalTierDefinition;
    };
    DestinyLoadoutConstantsDefinition: {
        [key: number]: DestinyLoadoutConstantsDefinition;
    };
    DestinyGuardianRankConstantsDefinition: {
        [key: number]: DestinyGuardianRankConstantsDefinition;
    };
}
export declare const enum ManifestComponents {
    DestinyProgressionDefinition = 'DestinyProgressionDefinition',
    DestinyInventoryItemDefinition = 'DestinyInventoryItemDefinition',
    DestinyCollectibleDefinition = 'DestinyCollectibleDefinition',
    DestinyMaterialRequirementSetDefinition = 'DestinyMaterialRequirementSetDefinition',
    DestinyPresentationNodeDefinition = 'DestinyPresentationNodeDefinition',
    DestinyObjectiveDefinition = 'DestinyObjectiveDefinition',
    DestinyLocationDefinition = 'DestinyLocationDefinition',
    DestinyVendorDefinition = 'DestinyVendorDefinition',
    DestinyFactionDefinition = 'DestinyFactionDefinition',
    DestinyDestinationDefinition = 'DestinyDestinationDefinition',
    DestinyPlaceDefinition = 'DestinyPlaceDefinition',
    DestinyActivityDefinition = 'DestinyActivityDefinition',
    DestinyActivityTypeDefinition = 'DestinyActivityTypeDefinition',
    DestinyActivityModifierDefinition = 'DestinyActivityModifierDefinition',
    DestinyActivityModeDefinition = 'DestinyActivityModeDefinition',
    DestinyActivityGraphDefinition = 'DestinyActivityGraphDefinition',
    DestinyEquipmentSlotDefinition = 'DestinyEquipmentSlotDefinition',
    DestinyInventoryBucketDefinition = 'DestinyInventoryBucketDefinition',
    DestinySocketTypeDefinition = 'DestinySocketTypeDefinition',
    DestinySocketCategoryDefinition = 'DestinySocketCategoryDefinition',
    DestinyVendorGroupDefinition = 'DestinyVendorGroupDefinition',
    DestinySandboxPerkDefinition = 'DestinySandboxPerkDefinition',
    DestinyDamageTypeDefinition = 'DestinyDamageTypeDefinition',
    DestinyStatDefinition = 'DestinyStatDefinition',
    DestinyRecordDefinition = 'DestinyRecordDefinition',
    DestinyLoreDefinition = 'DestinyLoreDefinition',
    DestinyGenderDefinition = 'DestinyGenderDefinition',
    DestinyTraitDefinition = 'DestinyTraitDefinition',
    DestinyMetricDefinition = 'DestinyMetricDefinition',
    DestinyItemTierTypeDefinition = 'DestinyItemTierTypeDefinition',
    DestinyStatGroupDefinition = 'DestinyStatGroupDefinition',
    DestinySandboxPatternDefinition = 'DestinySandboxPatternDefinition',
    DestinyClassDefinition = 'DestinyClassDefinition',
    DestinyArtifactDefinition = 'DestinyArtifactDefinition',
    DestinyProgressionLevelRequirementDefinition = 'DestinyProgressionLevelRequirementDefinition',
    DestinyPowerCapDefinition = 'DestinyPowerCapDefinition',
    DestinyRewardSourceDefinition = 'DestinyRewardSourceDefinition',
    DestinyEnergyTypeDefinition = 'DestinyEnergyTypeDefinition',
    DestinyPlugSetDefinition = 'DestinyPlugSetDefinition',
    DestinyTalentGridDefinition = 'DestinyTalentGridDefinition',
    DestinyItemCategoryDefinition = 'DestinyItemCategoryDefinition',
    DestinyBreakerTypeDefinition = 'DestinyBreakerTypeDefinition',
    DestinySeasonDefinition = 'DestinySeasonDefinition',
    DestinySeasonPassDefinition = 'DestinySeasonPassDefinition',
    DestinyEventCardDefinition = 'DestinyEventCardDefinition',
    DestinyGuardianRankDefinition = 'DestinyGuardianRankDefinition',
    DestinyChecklistDefinition = 'DestinyChecklistDefinition',
    DestinySocialCommendationNodeDefinition = 'DestinySocialCommendationNodeDefinition',
    DestinySocialCommendationDefinition = 'DestinySocialCommendationDefinition',
    DestinyRaceDefinition = 'DestinyRaceDefinition',
    DestinyLoadoutColorDefinition = 'DestinyLoadoutColorDefinition',
    DestinyLoadoutIconDefinition = 'DestinyLoadoutIconDefinition',
    DestinyLoadoutNameDefinition = 'DestinyLoadoutNameDefinition',
    DestinyMilestoneDefinition = 'DestinyMilestoneDefinition',
    DestinyUnlockDefinition = 'DestinyUnlockDefinition',
    DestinyReportReasonCategoryDefinition = 'DestinyReportReasonCategoryDefinition',
    DestinyMedalTierDefinition = 'DestinyMedalTierDefinition',
    DestinyLoadoutConstantsDefinition = 'DestinyLoadoutConstantsDefinition',
    DestinyGuardianRankConstantsDefinition = 'DestinyGuardianRankConstantsDefinition'
}
/**
 * languages the manifest comes in, as their required keys to download them
 */
export declare const destinyManifestLanguages: readonly [
    'de',
    'en',
    'es',
    'es-mx',
    'fr',
    'it',
    'ja',
    'ko',
    'pl',
    'pt-br',
    'ru',
    'zh-chs',
    'zh-cht'
];
export declare type DestinyManifestLanguage =
    (typeof destinyManifestLanguages)[number];
export declare type DestinyManifestComponentName =
    keyof AllDestinyManifestComponents;
export declare type DestinyManifestSlice<
    K extends Readonly<DestinyManifestComponentName[]>
> = Pick<AllDestinyManifestComponents, K[number]>;
/**
 * given a STRING table name, returns that TYPE, so that you can write a function like:
 * func<K extends DestinyManifestComponentName>(arg0:K):DestinyDefinitionFrom<K>{...}
 * i.e.
 * func('DestinyInventoryItemDefinition') will return type DestinyInventoryItemDefinition
 */
export declare type DestinyDefinitionFrom<
    K extends DestinyManifestComponentName
> = AllDestinyManifestComponents[K][number];
