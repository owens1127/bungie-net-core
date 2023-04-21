"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyObjectiveGrantStyle = void 0;
let DestinyObjectiveGrantStyle = function (DestinyObjectiveGrantStyle) {
  DestinyObjectiveGrantStyle[DestinyObjectiveGrantStyle["WhenIncomplete"] = 0] = "WhenIncomplete";
  DestinyObjectiveGrantStyle[DestinyObjectiveGrantStyle["WhenComplete"] = 1] = "WhenComplete";
  DestinyObjectiveGrantStyle[DestinyObjectiveGrantStyle["Always"] = 2] = "Always";
  return DestinyObjectiveGrantStyle;
}({});
exports.DestinyObjectiveGrantStyle = DestinyObjectiveGrantStyle;