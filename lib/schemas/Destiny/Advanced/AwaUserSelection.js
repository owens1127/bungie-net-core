"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AwaUserSelection = void 0;
let AwaUserSelection = function (AwaUserSelection) {
  AwaUserSelection[AwaUserSelection["None"] = 0] = "None";
  AwaUserSelection[AwaUserSelection["Rejected"] = 1] = "Rejected";
  AwaUserSelection[AwaUserSelection["Approved"] = 2] = "Approved";
  return AwaUserSelection;
}({});
exports.AwaUserSelection = AwaUserSelection;