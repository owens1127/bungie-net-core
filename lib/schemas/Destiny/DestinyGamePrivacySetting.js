"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyGamePrivacySetting = void 0;
let DestinyGamePrivacySetting = function (DestinyGamePrivacySetting) {
  DestinyGamePrivacySetting[DestinyGamePrivacySetting["Open"] = 0] = "Open";
  DestinyGamePrivacySetting[DestinyGamePrivacySetting["ClanAndFriendsOnly"] = 1] = "ClanAndFriendsOnly";
  DestinyGamePrivacySetting[DestinyGamePrivacySetting["FriendsOnly"] = 2] = "FriendsOnly";
  DestinyGamePrivacySetting[DestinyGamePrivacySetting["InvitationOnly"] = 3] = "InvitationOnly";
  DestinyGamePrivacySetting[DestinyGamePrivacySetting["Closed"] = 4] = "Closed";
  return DestinyGamePrivacySetting;
}({});
exports.DestinyGamePrivacySetting = DestinyGamePrivacySetting;