"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyVendorItemRefundPolicy = void 0;
let DestinyVendorItemRefundPolicy = function (DestinyVendorItemRefundPolicy) {
  DestinyVendorItemRefundPolicy[DestinyVendorItemRefundPolicy["NotRefundable"] = 0] = "NotRefundable";
  DestinyVendorItemRefundPolicy[DestinyVendorItemRefundPolicy["DeletesItem"] = 1] = "DeletesItem";
  DestinyVendorItemRefundPolicy[DestinyVendorItemRefundPolicy["RevokesLicense"] = 2] = "RevokesLicense";
  return DestinyVendorItemRefundPolicy;
}({});
exports.DestinyVendorItemRefundPolicy = DestinyVendorItemRefundPolicy;