"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MembershipOption = void 0;
let MembershipOption = function (MembershipOption) {
  MembershipOption[MembershipOption["Reviewed"] = 0] = "Reviewed";
  MembershipOption[MembershipOption["Open"] = 1] = "Open";
  MembershipOption[MembershipOption["Closed"] = 2] = "Closed";
  return MembershipOption;
}({});
exports.MembershipOption = MembershipOption;