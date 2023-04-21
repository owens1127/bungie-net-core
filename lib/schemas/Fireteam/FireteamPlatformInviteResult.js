"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FireteamPlatformInviteResult = void 0;
let FireteamPlatformInviteResult = function (FireteamPlatformInviteResult) {
  FireteamPlatformInviteResult[FireteamPlatformInviteResult["None"] = 0] = "None";
  FireteamPlatformInviteResult[FireteamPlatformInviteResult["Success"] = 1] = "Success";
  FireteamPlatformInviteResult[FireteamPlatformInviteResult["AlreadyInFireteam"] = 2] = "AlreadyInFireteam";
  FireteamPlatformInviteResult[FireteamPlatformInviteResult["Throttled"] = 3] = "Throttled";
  FireteamPlatformInviteResult[FireteamPlatformInviteResult["ServiceError"] = 4] = "ServiceError";
  return FireteamPlatformInviteResult;
}({});
exports.FireteamPlatformInviteResult = FireteamPlatformInviteResult;