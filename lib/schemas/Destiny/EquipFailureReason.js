"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EquipFailureReason = void 0;
var EquipFailureReason = {
  None: 0,
  ItemUnequippable: 1,
  ItemUniqueEquipRestricted: 2,
  ItemFailedUnlockCheck: 4,
  ItemFailedLevelCheck: 8,
  ItemWrapped: 16,
  ItemNotLoaded: 32,
  ItemEquipBlocklisted: 64,
  ItemLoadoutRequirementNotMet: 128
};
exports.EquipFailureReason = EquipFailureReason;