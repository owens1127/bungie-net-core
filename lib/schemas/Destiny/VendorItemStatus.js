"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VendorItemStatus = void 0;
let VendorItemStatus = function (VendorItemStatus) {
  VendorItemStatus[VendorItemStatus["Success"] = 0] = "Success";
  VendorItemStatus[VendorItemStatus["NoInventorySpace"] = 1] = "NoInventorySpace";
  VendorItemStatus[VendorItemStatus["NoFunds"] = 2] = "NoFunds";
  VendorItemStatus[VendorItemStatus["NoProgression"] = 4] = "NoProgression";
  VendorItemStatus[VendorItemStatus["NoUnlock"] = 8] = "NoUnlock";
  VendorItemStatus[VendorItemStatus["NoQuantity"] = 16] = "NoQuantity";
  VendorItemStatus[VendorItemStatus["OutsidePurchaseWindow"] = 32] = "OutsidePurchaseWindow";
  VendorItemStatus[VendorItemStatus["NotAvailable"] = 64] = "NotAvailable";
  VendorItemStatus[VendorItemStatus["UniquenessViolation"] = 128] = "UniquenessViolation";
  VendorItemStatus[VendorItemStatus["UnknownError"] = 256] = "UnknownError";
  VendorItemStatus[VendorItemStatus["AlreadySelling"] = 512] = "AlreadySelling";
  VendorItemStatus[VendorItemStatus["Unsellable"] = 1024] = "Unsellable";
  VendorItemStatus[VendorItemStatus["SellingInhibited"] = 2048] = "SellingInhibited";
  VendorItemStatus[VendorItemStatus["AlreadyOwned"] = 4096] = "AlreadyOwned";
  VendorItemStatus[VendorItemStatus["DisplayOnly"] = 8192] = "DisplayOnly";
  return VendorItemStatus;
}({});
exports.VendorItemStatus = VendorItemStatus;