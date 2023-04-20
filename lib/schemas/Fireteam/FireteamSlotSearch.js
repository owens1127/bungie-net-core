"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FireteamSlotSearch = void 0;
let FireteamSlotSearch = function (FireteamSlotSearch) {
  FireteamSlotSearch[FireteamSlotSearch["NoSlotRestriction"] = 0] = "NoSlotRestriction";
  FireteamSlotSearch[FireteamSlotSearch["HasOpenPlayerSlots"] = 1] = "HasOpenPlayerSlots";
  FireteamSlotSearch[FireteamSlotSearch["HasOpenPlayerOrAltSlots"] = 2] = "HasOpenPlayerOrAltSlots";
  return FireteamSlotSearch;
}({});
exports.FireteamSlotSearch = FireteamSlotSearch;