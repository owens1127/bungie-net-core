"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupApplicationResolveState = void 0;
let GroupApplicationResolveState = function (GroupApplicationResolveState) {
  GroupApplicationResolveState[GroupApplicationResolveState["Unresolved"] = 0] = "Unresolved";
  GroupApplicationResolveState[GroupApplicationResolveState["Accepted"] = 1] = "Accepted";
  GroupApplicationResolveState[GroupApplicationResolveState["Denied"] = 2] = "Denied";
  GroupApplicationResolveState[GroupApplicationResolveState["Rescinded"] = 3] = "Rescinded";
  return GroupApplicationResolveState;
}({});
exports.GroupApplicationResolveState = GroupApplicationResolveState;