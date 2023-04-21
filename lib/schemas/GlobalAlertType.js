"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalAlertType = void 0;
let GlobalAlertType = function (GlobalAlertType) {
  GlobalAlertType[GlobalAlertType["GlobalAlert"] = 0] = "GlobalAlert";
  GlobalAlertType[GlobalAlertType["StreamingAlert"] = 1] = "StreamingAlert";
  return GlobalAlertType;
}({});
exports.GlobalAlertType = GlobalAlertType;