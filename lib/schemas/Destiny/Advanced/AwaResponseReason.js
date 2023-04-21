"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AwaResponseReason = void 0;
let AwaResponseReason = function (AwaResponseReason) {
  AwaResponseReason[AwaResponseReason["None"] = 0] = "None";
  AwaResponseReason[AwaResponseReason["Answered"] = 1] = "Answered";
  AwaResponseReason[AwaResponseReason["TimedOut"] = 2] = "TimedOut";
  AwaResponseReason[AwaResponseReason["Replaced"] = 3] = "Replaced";
  return AwaResponseReason;
}({});
exports.AwaResponseReason = AwaResponseReason;