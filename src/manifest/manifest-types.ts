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
} from '../models';
/**
 * this describes a big object holding several tables of hash-keyed DestinyDefinitions.
 * this is roughly what you get if you decode the gigantic, single-json manifest blob,
 * but also just what we use here to dole out single-table, typed definitions
 */

export type ManifestComponent<T> = {
  [key: number]: T;
};

export enum ManifestDefinition {
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

export type AllManifestComponents = {
  DestinyProgressionDefinition: ManifestComponent<DestinyProgressionDefinition>;
  DestinyInventoryItemDefinition: ManifestComponent<DestinyInventoryItemDefinition>;
  DestinyCollectibleDefinition: ManifestComponent<DestinyCollectibleDefinition>;
  DestinyMaterialRequirementSetDefinition: ManifestComponent<DestinyMaterialRequirementSetDefinition>;
  DestinyPresentationNodeDefinition: ManifestComponent<DestinyPresentationNodeDefinition>;
  DestinyObjectiveDefinition: ManifestComponent<DestinyObjectiveDefinition>;
  DestinyLocationDefinition: ManifestComponent<DestinyLocationDefinition>;
  DestinyVendorDefinition: ManifestComponent<DestinyVendorDefinition>;
  DestinyFactionDefinition: ManifestComponent<DestinyFactionDefinition>;
  DestinyDestinationDefinition: ManifestComponent<DestinyDestinationDefinition>;
  DestinyPlaceDefinition: ManifestComponent<DestinyPlaceDefinition>;
  DestinyActivityDefinition: ManifestComponent<DestinyActivityDefinition>;
  DestinyActivityTypeDefinition: ManifestComponent<DestinyActivityTypeDefinition>;
  DestinyActivityModifierDefinition: ManifestComponent<DestinyActivityModifierDefinition>;
  DestinyActivityModeDefinition: ManifestComponent<DestinyActivityModeDefinition>;
  DestinyActivityGraphDefinition: ManifestComponent<DestinyActivityGraphDefinition>;
  DestinyEquipmentSlotDefinition: ManifestComponent<DestinyEquipmentSlotDefinition>;
  DestinyInventoryBucketDefinition: ManifestComponent<DestinyInventoryBucketDefinition>;
  DestinySocketTypeDefinition: ManifestComponent<DestinySocketTypeDefinition>;
  DestinySocketCategoryDefinition: ManifestComponent<DestinySocketCategoryDefinition>;
  DestinyVendorGroupDefinition: ManifestComponent<DestinyVendorGroupDefinition>;
  DestinySandboxPerkDefinition: ManifestComponent<DestinySandboxPerkDefinition>;
  DestinyDamageTypeDefinition: ManifestComponent<DestinyDamageTypeDefinition>;
  DestinyStatDefinition: ManifestComponent<DestinyStatDefinition>;
  DestinyRecordDefinition: ManifestComponent<DestinyRecordDefinition>;
  DestinyLoreDefinition: ManifestComponent<DestinyLoreDefinition>;
  DestinyGenderDefinition: ManifestComponent<DestinyGenderDefinition>;
  DestinyTraitDefinition: ManifestComponent<DestinyTraitDefinition>;
  DestinyMetricDefinition: ManifestComponent<DestinyMetricDefinition>;
  DestinyItemTierTypeDefinition: ManifestComponent<DestinyItemTierTypeDefinition>;
  DestinyStatGroupDefinition: ManifestComponent<DestinyStatGroupDefinition>;
  DestinySandboxPatternDefinition: ManifestComponent<DestinySandboxPatternDefinition>;
  DestinyClassDefinition: ManifestComponent<DestinyClassDefinition>;
  DestinyArtifactDefinition: ManifestComponent<DestinyArtifactDefinition>;
  DestinyProgressionLevelRequirementDefinition: ManifestComponent<DestinyProgressionLevelRequirementDefinition>;
  DestinyPowerCapDefinition: ManifestComponent<DestinyPowerCapDefinition>;
  DestinyRewardSourceDefinition: ManifestComponent<DestinyRewardSourceDefinition>;
  DestinyEnergyTypeDefinition: ManifestComponent<DestinyEnergyTypeDefinition>;
  DestinyPlugSetDefinition: ManifestComponent<DestinyPlugSetDefinition>;
  DestinyTalentGridDefinition: ManifestComponent<DestinyTalentGridDefinition>;
  DestinyItemCategoryDefinition: ManifestComponent<DestinyItemCategoryDefinition>;
  DestinyBreakerTypeDefinition: ManifestComponent<DestinyBreakerTypeDefinition>;
  DestinySeasonDefinition: ManifestComponent<DestinySeasonDefinition>;
  DestinySeasonPassDefinition: ManifestComponent<DestinySeasonPassDefinition>;
  DestinyEventCardDefinition: ManifestComponent<DestinyEventCardDefinition>;
  DestinyGuardianRankDefinition: ManifestComponent<DestinyGuardianRankDefinition>;
  DestinyChecklistDefinition: ManifestComponent<DestinyChecklistDefinition>;
  DestinySocialCommendationNodeDefinition: ManifestComponent<DestinySocialCommendationNodeDefinition>;
  DestinySocialCommendationDefinition: ManifestComponent<DestinySocialCommendationDefinition>;
  DestinyRaceDefinition: ManifestComponent<DestinyRaceDefinition>;
  DestinyLoadoutColorDefinition: ManifestComponent<DestinyLoadoutColorDefinition>;
  DestinyLoadoutIconDefinition: ManifestComponent<DestinyLoadoutIconDefinition>;
  DestinyLoadoutNameDefinition: ManifestComponent<DestinyLoadoutNameDefinition>;
  DestinyMilestoneDefinition: ManifestComponent<DestinyMilestoneDefinition>;
  DestinyUnlockDefinition: ManifestComponent<DestinyUnlockDefinition>;
  DestinyReportReasonCategoryDefinition: ManifestComponent<DestinyReportReasonCategoryDefinition>;
  DestinyMedalTierDefinition: ManifestComponent<DestinyMedalTierDefinition>;
  DestinyLoadoutConstantsDefinition: ManifestComponent<DestinyLoadoutConstantsDefinition>;
  DestinyGuardianRankConstantsDefinition: ManifestComponent<DestinyGuardianRankConstantsDefinition>;
};

/**
 * languages the manifest comes in, as their required keys to download them
 */
export const destinyManifestLanguages = [
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
] as const;
export type DestinyManifestLanguage = (typeof destinyManifestLanguages)[number];

export type DestinyManifestSlice<K extends Readonly<ManifestDefinition[]>> =
  Pick<AllManifestComponents, K[number]>;

/**
 * given a STRING table name, returns that TYPE, so that you can write a function like:
 * func<K extends DestinyManifestComponentName>(arg0:K):DestinyDefinitionFrom<K>{...}
 * i.e.
 * func('DestinyInventoryItemDefinition') will return type DestinyInventoryItemDefinition
 */
export type DestinyDefinitionFrom<K extends ManifestDefinition> =
  AllManifestComponents[K][number];
