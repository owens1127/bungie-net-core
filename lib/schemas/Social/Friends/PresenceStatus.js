"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresenceStatus = void 0;
let PresenceStatus = function (PresenceStatus) {
  PresenceStatus[PresenceStatus["OfflineOrUnknown"] = 0] = "OfflineOrUnknown";
  PresenceStatus[PresenceStatus["Online"] = 1] = "Online";
  return PresenceStatus;
}({});
exports.PresenceStatus = PresenceStatus;