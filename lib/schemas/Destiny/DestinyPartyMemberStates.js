

export let DestinyPartyMemberStates;
(function (DestinyPartyMemberStates) {
  DestinyPartyMemberStates[DestinyPartyMemberStates["None"] = 0] = "None";
  DestinyPartyMemberStates[DestinyPartyMemberStates["FireteamMember"] = 1] = "FireteamMember";
  DestinyPartyMemberStates[DestinyPartyMemberStates["PosseMember"] = 2] = "PosseMember";
  DestinyPartyMemberStates[DestinyPartyMemberStates["GroupMember"] = 4] = "GroupMember";
  DestinyPartyMemberStates[DestinyPartyMemberStates["PartyLeader"] = 8] = "PartyLeader";
})(DestinyPartyMemberStates || (DestinyPartyMemberStates = {}));