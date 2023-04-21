"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyPartyMemberStates = void 0;
let DestinyPartyMemberStates = function (DestinyPartyMemberStates) {
  DestinyPartyMemberStates[DestinyPartyMemberStates["None"] = 0] = "None";
  DestinyPartyMemberStates[DestinyPartyMemberStates["FireteamMember"] = 1] = "FireteamMember";
  DestinyPartyMemberStates[DestinyPartyMemberStates["PosseMember"] = 2] = "PosseMember";
  DestinyPartyMemberStates[DestinyPartyMemberStates["GroupMember"] = 4] = "GroupMember";
  DestinyPartyMemberStates[DestinyPartyMemberStates["PartyLeader"] = 8] = "PartyLeader";
  return DestinyPartyMemberStates;
}({});
exports.DestinyPartyMemberStates = DestinyPartyMemberStates;