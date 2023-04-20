"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferStatuses = void 0;
let TransferStatuses = function (TransferStatuses) {
  TransferStatuses[TransferStatuses["CanTransfer"] = 0] = "CanTransfer";
  TransferStatuses[TransferStatuses["ItemIsEquipped"] = 1] = "ItemIsEquipped";
  TransferStatuses[TransferStatuses["NotTransferrable"] = 2] = "NotTransferrable";
  TransferStatuses[TransferStatuses["NoRoomInDestination"] = 4] = "NoRoomInDestination";
  return TransferStatuses;
}({});
exports.TransferStatuses = TransferStatuses;