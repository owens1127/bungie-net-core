

export let MembershipOption;
(function (MembershipOption) {
  MembershipOption[MembershipOption["Reviewed"] = 0] = "Reviewed";
  MembershipOption[MembershipOption["Open"] = 1] = "Open";
  MembershipOption[MembershipOption["Closed"] = 2] = "Closed";
})(MembershipOption || (MembershipOption = {}));