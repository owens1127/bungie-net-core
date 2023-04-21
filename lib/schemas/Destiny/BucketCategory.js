"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BucketCategory = void 0;
let BucketCategory = function (BucketCategory) {
  BucketCategory[BucketCategory["Invisible"] = 0] = "Invisible";
  BucketCategory[BucketCategory["Item"] = 1] = "Item";
  BucketCategory[BucketCategory["Currency"] = 2] = "Currency";
  BucketCategory[BucketCategory["Equippable"] = 3] = "Equippable";
  BucketCategory[BucketCategory["Ignored"] = 4] = "Ignored";
  return BucketCategory;
}({});
exports.BucketCategory = BucketCategory;