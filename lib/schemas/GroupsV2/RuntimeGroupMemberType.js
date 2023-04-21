"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuntimeGroupMemberType = void 0;
let RuntimeGroupMemberType = function (RuntimeGroupMemberType) {
  RuntimeGroupMemberType[RuntimeGroupMemberType["None"] = 0] = "None";
  RuntimeGroupMemberType[RuntimeGroupMemberType["Beginner"] = 1] = "Beginner";
  RuntimeGroupMemberType[RuntimeGroupMemberType["Member"] = 2] = "Member";
  RuntimeGroupMemberType[RuntimeGroupMemberType["Admin"] = 3] = "Admin";
  RuntimeGroupMemberType[RuntimeGroupMemberType["ActingFounder"] = 4] = "ActingFounder";
  RuntimeGroupMemberType[RuntimeGroupMemberType["Founder"] = 5] = "Founder";
  return RuntimeGroupMemberType;
}({});
exports.RuntimeGroupMemberType = RuntimeGroupMemberType;