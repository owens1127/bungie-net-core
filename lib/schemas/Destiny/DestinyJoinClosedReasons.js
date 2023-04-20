"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyJoinClosedReasons = void 0;
let DestinyJoinClosedReasons = function (DestinyJoinClosedReasons) {
  DestinyJoinClosedReasons[DestinyJoinClosedReasons["None"] = 0] = "None";
  DestinyJoinClosedReasons[DestinyJoinClosedReasons["InMatchmaking"] = 1] = "InMatchmaking";
  DestinyJoinClosedReasons[DestinyJoinClosedReasons["Loading"] = 2] = "Loading";
  DestinyJoinClosedReasons[DestinyJoinClosedReasons["SoloMode"] = 4] = "SoloMode";
  DestinyJoinClosedReasons[DestinyJoinClosedReasons["InternalReasons"] = 8] = "InternalReasons";
  DestinyJoinClosedReasons[DestinyJoinClosedReasons["DisallowedByGameState"] = 16] = "DisallowedByGameState";
  DestinyJoinClosedReasons[DestinyJoinClosedReasons["Offline"] = 32768] = "Offline";
  return DestinyJoinClosedReasons;
}({});
exports.DestinyJoinClosedReasons = DestinyJoinClosedReasons;