"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalAlertLevel = void 0;
let GlobalAlertLevel = function (GlobalAlertLevel) {
  GlobalAlertLevel[GlobalAlertLevel["Unknown"] = 0] = "Unknown";
  GlobalAlertLevel[GlobalAlertLevel["Blue"] = 1] = "Blue";
  GlobalAlertLevel[GlobalAlertLevel["Yellow"] = 2] = "Yellow";
  GlobalAlertLevel[GlobalAlertLevel["Red"] = 3] = "Red";
  return GlobalAlertLevel;
}({});
exports.GlobalAlertLevel = GlobalAlertLevel;