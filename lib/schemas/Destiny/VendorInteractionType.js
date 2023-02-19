

export let VendorInteractionType;
(function (VendorInteractionType) {
  VendorInteractionType[VendorInteractionType["Unknown"] = 0] = "Unknown";
  VendorInteractionType[VendorInteractionType["Undefined"] = 1] = "Undefined";
  VendorInteractionType[VendorInteractionType["QuestComplete"] = 2] = "QuestComplete";
  VendorInteractionType[VendorInteractionType["QuestContinue"] = 3] = "QuestContinue";
  VendorInteractionType[VendorInteractionType["ReputationPreview"] = 4] = "ReputationPreview";
  VendorInteractionType[VendorInteractionType["RankUpReward"] = 5] = "RankUpReward";
  VendorInteractionType[VendorInteractionType["TokenTurnIn"] = 6] = "TokenTurnIn";
  VendorInteractionType[VendorInteractionType["QuestAccept"] = 7] = "QuestAccept";
  VendorInteractionType[VendorInteractionType["ProgressTab"] = 8] = "ProgressTab";
  VendorInteractionType[VendorInteractionType["End"] = 9] = "End";
  VendorInteractionType[VendorInteractionType["Start"] = 10] = "Start";
})(VendorInteractionType || (VendorInteractionType = {}));