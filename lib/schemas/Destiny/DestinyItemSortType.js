"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyItemSortType = void 0;
let DestinyItemSortType = function (DestinyItemSortType) {
  DestinyItemSortType[DestinyItemSortType["ItemId"] = 0] = "ItemId";
  DestinyItemSortType[DestinyItemSortType["Timestamp"] = 1] = "Timestamp";
  DestinyItemSortType[DestinyItemSortType["StackSize"] = 2] = "StackSize";
  return DestinyItemSortType;
}({});
exports.DestinyItemSortType = DestinyItemSortType;