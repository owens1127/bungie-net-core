"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TierType = void 0;
let TierType = function (TierType) {
  TierType[TierType["Unknown"] = 0] = "Unknown";
  TierType[TierType["Currency"] = 1] = "Currency";
  TierType[TierType["Basic"] = 2] = "Basic";
  TierType[TierType["Common"] = 3] = "Common";
  TierType[TierType["Rare"] = 4] = "Rare";
  TierType[TierType["Superior"] = 5] = "Superior";
  TierType[TierType["Exotic"] = 6] = "Exotic";
  return TierType;
}({});
exports.TierType = TierType;