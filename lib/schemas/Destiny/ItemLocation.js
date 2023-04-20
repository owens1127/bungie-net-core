"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemLocation = void 0;
let ItemLocation = function (ItemLocation) {
  ItemLocation[ItemLocation["Unknown"] = 0] = "Unknown";
  ItemLocation[ItemLocation["Inventory"] = 1] = "Inventory";
  ItemLocation[ItemLocation["Vault"] = 2] = "Vault";
  ItemLocation[ItemLocation["Vendor"] = 3] = "Vendor";
  ItemLocation[ItemLocation["Postmaster"] = 4] = "Postmaster";
  return ItemLocation;
}({});
exports.ItemLocation = ItemLocation;