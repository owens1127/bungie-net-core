"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForumTopicsSortEnum = void 0;
let ForumTopicsSortEnum = function (ForumTopicsSortEnum) {
  ForumTopicsSortEnum[ForumTopicsSortEnum["Default"] = 0] = "Default";
  ForumTopicsSortEnum[ForumTopicsSortEnum["LastReplied"] = 1] = "LastReplied";
  ForumTopicsSortEnum[ForumTopicsSortEnum["MostReplied"] = 2] = "MostReplied";
  ForumTopicsSortEnum[ForumTopicsSortEnum["Popularity"] = 3] = "Popularity";
  ForumTopicsSortEnum[ForumTopicsSortEnum["Controversiality"] = 4] = "Controversiality";
  ForumTopicsSortEnum[ForumTopicsSortEnum["Liked"] = 5] = "Liked";
  ForumTopicsSortEnum[ForumTopicsSortEnum["HighestRated"] = 6] = "HighestRated";
  ForumTopicsSortEnum[ForumTopicsSortEnum["MostUpvoted"] = 7] = "MostUpvoted";
  return ForumTopicsSortEnum;
}({});
exports.ForumTopicsSortEnum = ForumTopicsSortEnum;