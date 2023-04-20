"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlugAvailabilityMode = void 0;
let PlugAvailabilityMode = function (PlugAvailabilityMode) {
  PlugAvailabilityMode[PlugAvailabilityMode["Normal"] = 0] = "Normal";
  PlugAvailabilityMode[PlugAvailabilityMode["UnavailableIfSocketContainsMatchingPlugCategory"] = 1] = "UnavailableIfSocketContainsMatchingPlugCategory";
  PlugAvailabilityMode[PlugAvailabilityMode["AvailableIfSocketContainsMatchingPlugCategory"] = 2] = "AvailableIfSocketContainsMatchingPlugCategory";
  return PlugAvailabilityMode;
}({});
exports.PlugAvailabilityMode = PlugAvailabilityMode;