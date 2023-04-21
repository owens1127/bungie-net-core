"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupsForMemberFilter = void 0;
let GroupsForMemberFilter = function (GroupsForMemberFilter) {
  GroupsForMemberFilter[GroupsForMemberFilter["All"] = 0] = "All";
  GroupsForMemberFilter[GroupsForMemberFilter["Founded"] = 1] = "Founded";
  GroupsForMemberFilter[GroupsForMemberFilter["NonFounded"] = 2] = "NonFounded";
  return GroupsForMemberFilter;
}({});
exports.GroupsForMemberFilter = GroupsForMemberFilter;