

export let GroupDateRange;
(function (GroupDateRange) {
  GroupDateRange[GroupDateRange["All"] = 0] = "All";
  GroupDateRange[GroupDateRange["PastDay"] = 1] = "PastDay";
  GroupDateRange[GroupDateRange["PastWeek"] = 2] = "PastWeek";
  GroupDateRange[GroupDateRange["PastMonth"] = 3] = "PastMonth";
  GroupDateRange[GroupDateRange["PastYear"] = 4] = "PastYear";
})(GroupDateRange || (GroupDateRange = {}));