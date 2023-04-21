"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FireteamDateRange = void 0;
let FireteamDateRange = function (FireteamDateRange) {
  FireteamDateRange[FireteamDateRange["All"] = 0] = "All";
  FireteamDateRange[FireteamDateRange["Now"] = 1] = "Now";
  FireteamDateRange[FireteamDateRange["TwentyFourHours"] = 2] = "TwentyFourHours";
  FireteamDateRange[FireteamDateRange["FortyEightHours"] = 3] = "FortyEightHours";
  FireteamDateRange[FireteamDateRange["ThisWeek"] = 4] = "ThisWeek";
  return FireteamDateRange;
}({});
exports.FireteamDateRange = FireteamDateRange;