"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyGender = void 0;
let DestinyGender = function (DestinyGender) {
  DestinyGender[DestinyGender["Male"] = 0] = "Male";
  DestinyGender[DestinyGender["Female"] = 1] = "Female";
  DestinyGender[DestinyGender["Unknown"] = 2] = "Unknown";
  return DestinyGender;
}({});
exports.DestinyGender = DestinyGender;