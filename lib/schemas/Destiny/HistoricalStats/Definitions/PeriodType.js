"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeriodType = void 0;
let PeriodType = function (PeriodType) {
  PeriodType[PeriodType["None"] = 0] = "None";
  PeriodType[PeriodType["Daily"] = 1] = "Daily";
  PeriodType[PeriodType["AllTime"] = 2] = "AllTime";
  PeriodType[PeriodType["Activity"] = 3] = "Activity";
  return PeriodType;
}({});
exports.PeriodType = PeriodType;