"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupPotentialMemberStatus = void 0;
let GroupPotentialMemberStatus = function (GroupPotentialMemberStatus) {
  GroupPotentialMemberStatus[GroupPotentialMemberStatus["None"] = 0] = "None";
  GroupPotentialMemberStatus[GroupPotentialMemberStatus["Applicant"] = 1] = "Applicant";
  GroupPotentialMemberStatus[GroupPotentialMemberStatus["Invitee"] = 2] = "Invitee";
  return GroupPotentialMemberStatus;
}({});
exports.GroupPotentialMemberStatus = GroupPotentialMemberStatus;