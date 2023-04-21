"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupAllianceStatus = void 0;
let GroupAllianceStatus = function (GroupAllianceStatus) {
  GroupAllianceStatus[GroupAllianceStatus["Unallied"] = 0] = "Unallied";
  GroupAllianceStatus[GroupAllianceStatus["Parent"] = 1] = "Parent";
  GroupAllianceStatus[GroupAllianceStatus["Child"] = 2] = "Child";
  return GroupAllianceStatus;
}({});
exports.GroupAllianceStatus = GroupAllianceStatus;