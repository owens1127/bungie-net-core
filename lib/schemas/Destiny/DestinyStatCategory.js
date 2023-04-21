"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyStatCategory = void 0;
let DestinyStatCategory = function (DestinyStatCategory) {
  DestinyStatCategory[DestinyStatCategory["Gameplay"] = 0] = "Gameplay";
  DestinyStatCategory[DestinyStatCategory["Weapon"] = 1] = "Weapon";
  DestinyStatCategory[DestinyStatCategory["Defense"] = 2] = "Defense";
  DestinyStatCategory[DestinyStatCategory["Primary"] = 3] = "Primary";
  return DestinyStatCategory;
}({});
exports.DestinyStatCategory = DestinyStatCategory;