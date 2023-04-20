"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitType = void 0;
let UnitType = function (UnitType) {
  UnitType[UnitType["None"] = 0] = "None";
  UnitType[UnitType["Count"] = 1] = "Count";
  UnitType[UnitType["PerGame"] = 2] = "PerGame";
  UnitType[UnitType["Seconds"] = 3] = "Seconds";
  UnitType[UnitType["Points"] = 4] = "Points";
  UnitType[UnitType["Team"] = 5] = "Team";
  UnitType[UnitType["Distance"] = 6] = "Distance";
  UnitType[UnitType["Percent"] = 7] = "Percent";
  UnitType[UnitType["Ratio"] = 8] = "Ratio";
  UnitType[UnitType["Boolean"] = 9] = "Boolean";
  UnitType[UnitType["WeaponType"] = 10] = "WeaponType";
  UnitType[UnitType["Standing"] = 11] = "Standing";
  UnitType[UnitType["Milliseconds"] = 12] = "Milliseconds";
  UnitType[UnitType["CompletionReason"] = 13] = "CompletionReason";
  return UnitType;
}({});
exports.UnitType = UnitType;