"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyGatingScope = void 0;
let DestinyGatingScope = function (DestinyGatingScope) {
  DestinyGatingScope[DestinyGatingScope["None"] = 0] = "None";
  DestinyGatingScope[DestinyGatingScope["Global"] = 1] = "Global";
  DestinyGatingScope[DestinyGatingScope["Clan"] = 2] = "Clan";
  DestinyGatingScope[DestinyGatingScope["Profile"] = 3] = "Profile";
  DestinyGatingScope[DestinyGatingScope["Character"] = 4] = "Character";
  DestinyGatingScope[DestinyGatingScope["Item"] = 5] = "Item";
  DestinyGatingScope[DestinyGatingScope["AssumedWorstCase"] = 6] = "AssumedWorstCase";
  return DestinyGatingScope;
}({});
exports.DestinyGatingScope = DestinyGatingScope;