"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyStatsGroupType = void 0;
let DestinyStatsGroupType = function (DestinyStatsGroupType) {
  DestinyStatsGroupType[DestinyStatsGroupType["None"] = 0] = "None";
  DestinyStatsGroupType[DestinyStatsGroupType["General"] = 1] = "General";
  DestinyStatsGroupType[DestinyStatsGroupType["Weapons"] = 2] = "Weapons";
  DestinyStatsGroupType[DestinyStatsGroupType["Medals"] = 3] = "Medals";
  DestinyStatsGroupType[DestinyStatsGroupType["ReservedGroups"] = 100] = "ReservedGroups";
  DestinyStatsGroupType[DestinyStatsGroupType["Leaderboard"] = 101] = "Leaderboard";
  DestinyStatsGroupType[DestinyStatsGroupType["Activity"] = 102] = "Activity";
  DestinyStatsGroupType[DestinyStatsGroupType["UniqueWeapon"] = 103] = "UniqueWeapon";
  DestinyStatsGroupType[DestinyStatsGroupType["Internal"] = 104] = "Internal";
  return DestinyStatsGroupType;
}({});
exports.DestinyStatsGroupType = DestinyStatsGroupType;