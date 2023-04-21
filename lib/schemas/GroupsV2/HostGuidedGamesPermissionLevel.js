"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HostGuidedGamesPermissionLevel = void 0;
let HostGuidedGamesPermissionLevel = function (HostGuidedGamesPermissionLevel) {
  HostGuidedGamesPermissionLevel[HostGuidedGamesPermissionLevel["None"] = 0] = "None";
  HostGuidedGamesPermissionLevel[HostGuidedGamesPermissionLevel["Beginner"] = 1] = "Beginner";
  HostGuidedGamesPermissionLevel[HostGuidedGamesPermissionLevel["Member"] = 2] = "Member";
  return HostGuidedGamesPermissionLevel;
}({});
exports.HostGuidedGamesPermissionLevel = HostGuidedGamesPermissionLevel;