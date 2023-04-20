"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptInFlags = void 0;
let OptInFlags = function (OptInFlags) {
  OptInFlags[OptInFlags["None"] = 0] = "None";
  OptInFlags[OptInFlags["Newsletter"] = 1] = "Newsletter";
  OptInFlags[OptInFlags["System"] = 2] = "System";
  OptInFlags[OptInFlags["Marketing"] = 4] = "Marketing";
  OptInFlags[OptInFlags["UserResearch"] = 8] = "UserResearch";
  OptInFlags[OptInFlags["CustomerService"] = 16] = "CustomerService";
  OptInFlags[OptInFlags["Social"] = 32] = "Social";
  OptInFlags[OptInFlags["PlayTests"] = 64] = "PlayTests";
  OptInFlags[OptInFlags["PlayTestsLocal"] = 128] = "PlayTestsLocal";
  OptInFlags[OptInFlags["Careers"] = 256] = "Careers";
  return OptInFlags;
}({});
exports.OptInFlags = OptInFlags;