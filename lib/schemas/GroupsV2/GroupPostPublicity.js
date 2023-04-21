"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupPostPublicity = void 0;
let GroupPostPublicity = function (GroupPostPublicity) {
  GroupPostPublicity[GroupPostPublicity["Public"] = 0] = "Public";
  GroupPostPublicity[GroupPostPublicity["Alliance"] = 1] = "Alliance";
  GroupPostPublicity[GroupPostPublicity["Private"] = 2] = "Private";
  return GroupPostPublicity;
}({});
exports.GroupPostPublicity = GroupPostPublicity;