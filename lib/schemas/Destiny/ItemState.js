"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemState = void 0;
let ItemState = function (ItemState) {
  ItemState[ItemState["None"] = 0] = "None";
  ItemState[ItemState["Locked"] = 1] = "Locked";
  ItemState[ItemState["Tracked"] = 2] = "Tracked";
  ItemState[ItemState["Masterwork"] = 4] = "Masterwork";
  ItemState[ItemState["Crafted"] = 8] = "Crafted";
  ItemState[ItemState["HighlightedObjective"] = 16] = "HighlightedObjective";
  return ItemState;
}({});
exports.ItemState = ItemState;