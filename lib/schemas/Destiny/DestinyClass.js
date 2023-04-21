"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyClass = void 0;
let DestinyClass = function (DestinyClass) {
  DestinyClass[DestinyClass["Titan"] = 0] = "Titan";
  DestinyClass[DestinyClass["Hunter"] = 1] = "Hunter";
  DestinyClass[DestinyClass["Warlock"] = 2] = "Warlock";
  DestinyClass[DestinyClass["Unknown"] = 3] = "Unknown";
  return DestinyClass;
}({});
exports.DestinyClass = DestinyClass;