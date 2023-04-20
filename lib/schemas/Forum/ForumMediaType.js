"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForumMediaType = void 0;
let ForumMediaType = function (ForumMediaType) {
  ForumMediaType[ForumMediaType["None"] = 0] = "None";
  ForumMediaType[ForumMediaType["Image"] = 1] = "Image";
  ForumMediaType[ForumMediaType["Video"] = 2] = "Video";
  ForumMediaType[ForumMediaType["Youtube"] = 3] = "Youtube";
  return ForumMediaType;
}({});
exports.ForumMediaType = ForumMediaType;