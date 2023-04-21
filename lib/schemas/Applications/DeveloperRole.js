"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeveloperRole = void 0;
let DeveloperRole = function (DeveloperRole) {
  DeveloperRole[DeveloperRole["None"] = 0] = "None";
  DeveloperRole[DeveloperRole["Owner"] = 1] = "Owner";
  DeveloperRole[DeveloperRole["TeamMember"] = 2] = "TeamMember";
  return DeveloperRole;
}({});
exports.DeveloperRole = DeveloperRole;