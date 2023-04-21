"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityContentSortMode = void 0;
let CommunityContentSortMode = function (CommunityContentSortMode) {
  CommunityContentSortMode[CommunityContentSortMode["Trending"] = 0] = "Trending";
  CommunityContentSortMode[CommunityContentSortMode["Latest"] = 1] = "Latest";
  CommunityContentSortMode[CommunityContentSortMode["HighestRated"] = 2] = "HighestRated";
  return CommunityContentSortMode;
}({});
exports.CommunityContentSortMode = CommunityContentSortMode;