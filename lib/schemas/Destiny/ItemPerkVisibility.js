"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemPerkVisibility = void 0;
let ItemPerkVisibility = function (ItemPerkVisibility) {
  ItemPerkVisibility[ItemPerkVisibility["Visible"] = 0] = "Visible";
  ItemPerkVisibility[ItemPerkVisibility["Disabled"] = 1] = "Disabled";
  ItemPerkVisibility[ItemPerkVisibility["Hidden"] = 2] = "Hidden";
  return ItemPerkVisibility;
}({});
exports.ItemPerkVisibility = ItemPerkVisibility;