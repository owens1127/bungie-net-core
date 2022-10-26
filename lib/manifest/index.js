/**
 * These definitions and helper fucntions are based off the structure of DestinyManifest
 * in the bungie.net API spec, but are not explicity defined endpoints in the spec.
 */

const DestinyProgressionDefinition = require('../schemas/Destiny/Definitions/DestinyProgressionDefinition.js');
const DestinyInventoryItemDefinition = require('../schemas/Destiny/Definitions/DestinyInventoryItemDefinition.js');
const DestinyCollectibleDefinition = require('../schemas/Destiny/Definitions/Collectibles/DestinyCollectibleDefinition.js');
const DestinyMaterialRequirementSetDefinition = require('../schemas/Destiny/Definitions/DestinyMaterialRequirementSetDefinition.js');
const DestinyPresentationNodeDefinition = require('../schemas/Destiny/Definitions/Presentation/DestinyPresentationNodeDefinition.js');
const DestinyObjectiveDefinition = require('../schemas/Destiny/Definitions/DestinyObjectiveDefinition.js');
const DestinyLocationDefinition = require('../schemas/Destiny/Definitions/DestinyLocationDefinition.js');
const DestinyVendorDefinition = require('../schemas/Destiny/Definitions/DestinyVendorDefinition.js');
const DestinyFactionDefinition = require('../schemas/Destiny/Definitions/DestinyFactionDefinition.js');
const DestinyDestinationDefinition = require('../schemas/Destiny/Definitions/DestinyDestinationDefinition.js');
const DestinyPlaceDefinition = require('../schemas/Destiny/Definitions/DestinyPlaceDefinition.js');
const DestinyActivityDefinition = require('../schemas/Destiny/Definitions/DestinyActivityDefinition.js');
const DestinyActivityTypeDefinition = require('../schemas/Destiny/Definitions/DestinyActivityTypeDefinition.js');
const DestinyActivityModifierDefinition = require('../schemas/Destiny/Definitions/ActivityModifiers/DestinyActivityModifierDefinition.js');
const DestinyActivityModeDefinition = require('../schemas/Destiny/Definitions/DestinyActivityModeDefinition.js');
const DestinyActivityGraphDefinition = require('../schemas/Destiny/Definitions/Director/DestinyActivityGraphDefinition.js');
const DestinyEquipmentSlotDefinition = require('../schemas/Destiny/Definitions/DestinyEquipmentSlotDefinition.js');
const DestinyInventoryBucketDefinition = require('../schemas/Destiny/Definitions/DestinyInventoryBucketDefinition.js');
const DestinySocketTypeDefinition = require('../schemas/Destiny/Definitions/Sockets/DestinySocketTypeDefinition.js');
const DestinySocketCategoryDefinition = require('../schemas/Destiny/Definitions/Sockets/DestinySocketCategoryDefinition.js');
const DestinyVendorGroupDefinition = require('../schemas/Destiny/Definitions/DestinyVendorGroupDefinition.js');
const DestinySandboxPerkDefinition = require('../schemas/Destiny/Definitions/DestinySandboxPerkDefinition.js');
const DestinyDamageTypeDefinition = require('../schemas/Destiny/Definitions/DestinyDamageTypeDefinition.js');
const DestinyStatDefinition = require('../schemas/Destiny/Definitions/DestinyStatDefinition.js');
const DestinyRecordDefinition = require('../schemas/Destiny/Definitions/Records/DestinyRecordDefinition.js');
const DestinyLoreDefinition = require('../schemas/Destiny/Definitions/Lore/DestinyLoreDefinition.js');
const DestinyGenderDefinition = require('../schemas/Destiny/Definitions/DestinyGenderDefinition.js');
const DestinyTraitDefinition = require('../schemas/Destiny/Definitions/Traits/DestinyTraitDefinition.js');
const DestinyTraitCategoryDefinition = require('../schemas/Destiny/Definitions/Traits/DestinyTraitCategoryDefinition.js');
const DestinyMetricDefinition = require('../schemas/Destiny/Definitions/Metrics/DestinyMetricDefinition.js');
const DestinyItemTierTypeDefinition = require('../schemas/Destiny/Definitions/Items/DestinyItemTierTypeDefinition.js');
const DestinyStatGroupDefinition = require('../schemas/Destiny/Definitions/DestinyStatGroupDefinition.js');
const DestinySandboxPatternDefinition = require('../schemas/Destiny/Definitions/DestinySandboxPatternDefinition.js');
const DestinyClassDefinition = require('../schemas/Destiny/Definitions/DestinyClassDefinition.js');
const DestinyArtifactDefinition = require('../schemas/Destiny/Definitions/Artifacts/DestinyArtifactDefinition.js');
const DestinyProgressionLevelRequirementDefinition = require('../schemas/Destiny/Definitions/Progression/DestinyProgressionLevelRequirementDefinition.js');
const DestinyPowerCapDefinition = require('../schemas/Destiny/Definitions/PowerCaps/DestinyPowerCapDefinition.js');
const DestinyRewardSourceDefinition = require('../schemas/Destiny/Definitions/DestinyRewardSourceDefinition.js');
const DestinyEnergyTypeDefinition = require('../schemas/Destiny/Definitions/EnergyTypes/DestinyEnergyTypeDefinition.js');
const DestinyPlugSetDefinition = require('../schemas/Destiny/Definitions/Sockets/DestinyPlugSetDefinition.js');
const DestinyTalentGridDefinition = require('../schemas/Destiny/Definitions/DestinyTalentGridDefinition.js');
const DestinyItemCategoryDefinition = require('../schemas/Destiny/Definitions/DestinyItemCategoryDefinition.js');
const DestinyBreakerTypeDefinition = require('../schemas/Destiny/Definitions/BreakerTypes/DestinyBreakerTypeDefinition.js');
const DestinySeasonDefinition = require('../schemas/Destiny/Definitions/Seasons/DestinySeasonDefinition.js');
const DestinySeasonPassDefinition = require('../schemas/Destiny/Definitions/Seasons/DestinySeasonPassDefinition.js');
const DestinyEventCardDefinition = require('../schemas/Destiny/Definitions/Seasons/DestinyEventCardDefinition.js');
const DestinyChecklistDefinition = require('../schemas/Destiny/Definitions/Checklists/DestinyChecklistDefinition.js');
const DestinyRaceDefinition = require('../schemas/Destiny/Definitions/DestinyRaceDefinition.js');
const DestinyMilestoneDefinition = require('../schemas/Destiny/Definitions/Milestones/DestinyMilestoneDefinition.js');
const DestinyUnlockDefinition = require('../schemas/Destiny/Definitions/DestinyUnlockDefinition.js');
const DestinyReportReasonCategoryDefinition = require('../schemas/Destiny/Definitions/Reporting/DestinyReportReasonCategoryDefinition.js');
const DestinyMedalTierDefinition = require('../schemas/Destiny/Definitions/DestinyMedalTierDefinition.js');

/**
 * Represents the look-up key for the manifest
 * @typedef {number} Hash
*/

/**
 * this describes a big object holding several tables of hash-
 * keyedDestinyDefinitions. This is roughly what you get if you decode the gigantic,
 * single-json manifest blob, but also just what we use here to dole out single-
 * table, typed definitions
 * @typedef AllDestinyManifestComponents
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyProgressionDefinition.js')}} DestinyProgressionDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyInventoryItemDefinition.js')}} DestinyInventoryItemDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Collectibles/DestinyCollectibleDefinition.js')}} DestinyCollectibleDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyMaterialRequirementSetDefinition.js')}} DestinyMaterialRequirementSetDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Presentation/DestinyPresentationNodeDefinition.js')}} DestinyPresentationNodeDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyObjectiveDefinition.js')}} DestinyObjectiveDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyLocationDefinition.js')}} DestinyLocationDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyVendorDefinition.js')}} DestinyVendorDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyFactionDefinition.js')}} DestinyFactionDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyDestinationDefinition.js')}} DestinyDestinationDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyPlaceDefinition.js')}} DestinyPlaceDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyActivityDefinition.js')}} DestinyActivityDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyActivityTypeDefinition.js')}} DestinyActivityTypeDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/ActivityModifiers/DestinyActivityModifierDefinition.js')}} DestinyActivityModifierDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyActivityModeDefinition.js')}} DestinyActivityModeDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Director/DestinyActivityGraphDefinition.js')}} DestinyActivityGraphDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyEquipmentSlotDefinition.js')}} DestinyEquipmentSlotDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyInventoryBucketDefinition.js')}} DestinyInventoryBucketDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Sockets/DestinySocketTypeDefinition.js')}} DestinySocketTypeDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Sockets/DestinySocketCategoryDefinition.js')}} DestinySocketCategoryDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyVendorGroupDefinition.js')}} DestinyVendorGroupDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinySandboxPerkDefinition.js')}} DestinySandboxPerkDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyDamageTypeDefinition.js')}} DestinyDamageTypeDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyStatDefinition.js')}} DestinyStatDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Records/DestinyRecordDefinition.js')}} DestinyRecordDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Lore/DestinyLoreDefinition.js')}} DestinyLoreDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyGenderDefinition.js')}} DestinyGenderDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Traits/DestinyTraitDefinition.js')}} DestinyTraitDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Traits/DestinyTraitCategoryDefinition.js')}} DestinyTraitCategoryDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Metrics/DestinyMetricDefinition.js')}} DestinyMetricDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Items/DestinyItemTierTypeDefinition.js')}} DestinyItemTierTypeDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyStatGroupDefinition.js')}} DestinyStatGroupDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinySandboxPatternDefinition.js')}} DestinySandboxPatternDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyClassDefinition.js')}} DestinyClassDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Artifacts/DestinyArtifactDefinition.js')}} DestinyArtifactDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Progression/DestinyProgressionLevelRequirementDefinition.js')}} DestinyProgressionLevelRequirementDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/PowerCaps/DestinyPowerCapDefinition.js')}} DestinyPowerCapDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyRewardSourceDefinition.js')}} DestinyRewardSourceDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/EnergyTypes/DestinyEnergyTypeDefinition.js')}} DestinyEnergyTypeDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Sockets/DestinyPlugSetDefinition.js')}} DestinyPlugSetDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyTalentGridDefinition.js')}} DestinyTalentGridDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyItemCategoryDefinition.js')}} DestinyItemCategoryDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/BreakerTypes/DestinyBreakerTypeDefinition.js')}} DestinyBreakerTypeDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Seasons/DestinySeasonDefinition.js')}} DestinySeasonDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Seasons/DestinySeasonPassDefinition.js')}} DestinySeasonPassDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Seasons/DestinyEventCardDefinition.js')}} DestinyEventCardDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Checklists/DestinyChecklistDefinition.js')}} DestinyChecklistDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyRaceDefinition.js')}} DestinyRaceDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Milestones/DestinyMilestoneDefinition.js')}} DestinyMilestoneDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyUnlockDefinition.js')}} DestinyUnlockDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/Reporting/DestinyReportReasonCategoryDefinition.js')}} DestinyReportReasonCategoryDefinitions
 * @property {{[key: Hash]: import('../schemas/Destiny/Definitions/DestinyMedalTierDefinition.js')}} DestinyMedalTierDefinitions
*/

/** @typedef {AllDestinyManifestComponents.DestinyProgressionDefinitions | AllDestinyManifestComponents.DestinyInventoryItemDefinitions | AllDestinyManifestComponents.DestinyCollectibleDefinitions | AllDestinyManifestComponents.DestinyMaterialRequirementSetDefinitions | AllDestinyManifestComponents.DestinyPresentationNodeDefinitions | AllDestinyManifestComponents.DestinyObjectiveDefinitions | AllDestinyManifestComponents.DestinyLocationDefinitions | AllDestinyManifestComponents.DestinyVendorDefinitions | AllDestinyManifestComponents.DestinyFactionDefinitions | AllDestinyManifestComponents.DestinyDestinationDefinitions | AllDestinyManifestComponents.DestinyPlaceDefinitions | AllDestinyManifestComponents.DestinyActivityDefinitions | AllDestinyManifestComponents.DestinyActivityTypeDefinitions | AllDestinyManifestComponents.DestinyActivityModifierDefinitions | AllDestinyManifestComponents.DestinyActivityModeDefinitions | AllDestinyManifestComponents.DestinyActivityGraphDefinitions | AllDestinyManifestComponents.DestinyEquipmentSlotDefinitions | AllDestinyManifestComponents.DestinyInventoryBucketDefinitions | AllDestinyManifestComponents.DestinySocketTypeDefinitions | AllDestinyManifestComponents.DestinySocketCategoryDefinitions | AllDestinyManifestComponents.DestinyVendorGroupDefinitions | AllDestinyManifestComponents.DestinySandboxPerkDefinitions | AllDestinyManifestComponents.DestinyDamageTypeDefinitions | AllDestinyManifestComponents.DestinyStatDefinitions | AllDestinyManifestComponents.DestinyRecordDefinitions | AllDestinyManifestComponents.DestinyLoreDefinitions | AllDestinyManifestComponents.DestinyGenderDefinitions | AllDestinyManifestComponents.DestinyTraitDefinitions | AllDestinyManifestComponents.DestinyTraitCategoryDefinitions | AllDestinyManifestComponents.DestinyMetricDefinitions | AllDestinyManifestComponents.DestinyItemTierTypeDefinitions | AllDestinyManifestComponents.DestinyStatGroupDefinitions | AllDestinyManifestComponents.DestinySandboxPatternDefinitions | AllDestinyManifestComponents.DestinyClassDefinitions | AllDestinyManifestComponents.DestinyArtifactDefinitions | AllDestinyManifestComponents.DestinyProgressionLevelRequirementDefinitions | AllDestinyManifestComponents.DestinyPowerCapDefinitions | AllDestinyManifestComponents.DestinyRewardSourceDefinitions | AllDestinyManifestComponents.DestinyEnergyTypeDefinitions | AllDestinyManifestComponents.DestinyPlugSetDefinitions | AllDestinyManifestComponents.DestinyTalentGridDefinitions | AllDestinyManifestComponents.DestinyItemCategoryDefinitions | AllDestinyManifestComponents.DestinyBreakerTypeDefinitions | AllDestinyManifestComponents.DestinySeasonDefinitions | AllDestinyManifestComponents.DestinySeasonPassDefinitions | AllDestinyManifestComponents.DestinyEventCardDefinitions | AllDestinyManifestComponents.DestinyChecklistDefinitions | AllDestinyManifestComponents.DestinyRaceDefinitions | AllDestinyManifestComponents.DestinyMilestoneDefinitions | AllDestinyManifestComponents.DestinyUnlockDefinitions | AllDestinyManifestComponents.DestinyReportReasonCategoryDefinitions | AllDestinyManifestComponents.DestinyMedalTierDefinitions} DestinyManifestComponents */

/** @typedef {DestinyManifestComponents[]} DestinyManifestComponentSlice */

const TABLES = {
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
  DestinyTraitCategoryDefinition,
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
  DestinyChecklistDefinition,
  DestinyRaceDefinition,
  DestinyMilestoneDefinition,
  DestinyUnlockDefinition,
  DestinyReportReasonCategoryDefinition,
  DestinyMedalTierDefinition
}
exports.TABLES = TABLES

const LANGUAGES = {
  'de': 'de',
  'en': 'en',
  'es': 'es',
  'es-mx': 'es-mx',
  'fr': 'fr',
  'it': 'it',
  'ja': 'ja',
  'ko': 'ko',
  'pl': 'pl',
  'pt-br': 'pt-br',
  'ru': 'ru',
  'zh-chs': 'zh-chs',
  'zh-cht': 'zh-cht',
};
exports.LANGUAGES = LANGUAGES;

/** @typedef {'de' | 'en' | 'es' | 'es-mx' | 'fr' | 'it' | 'ja' | 'ko' | 'pl' | 'pt-br' | 'ru' | 'zh-chs' | 'zh-cht'} DestinyManifestLanguage */


exports.GetAllDestinyManifestComponents = require('lib/manifest/GetAllDestinyManifestComponents.js');
exports.GetDestinyManifestComponent = require('lib/manifest/GetDestinyManifestComponent.js');
exports.GetDestinyManifestSlice = require('lib/manifest/GetDestinyManifestSlice.js');