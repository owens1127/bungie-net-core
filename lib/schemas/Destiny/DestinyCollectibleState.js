"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyCollectibleState = void 0;
var DestinyCollectibleState = {
  None: 0,
  NotAcquired: 1,
  Obscured: 2,
  Invisible: 4,
  CannotAffordMaterialRequirements: 8,
  InventorySpaceUnavailable: 16,
  UniquenessViolation: 32,
  PurchaseDisabled: 64
};
exports.DestinyCollectibleState = DestinyCollectibleState;