"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationStatus = void 0;
let ApplicationStatus = function (ApplicationStatus) {
  ApplicationStatus[ApplicationStatus["None"] = 0] = "None";
  ApplicationStatus[ApplicationStatus["Private"] = 1] = "Private";
  ApplicationStatus[ApplicationStatus["Public"] = 2] = "Public";
  ApplicationStatus[ApplicationStatus["Disabled"] = 3] = "Disabled";
  ApplicationStatus[ApplicationStatus["Blocked"] = 4] = "Blocked";
  return ApplicationStatus;
}({});
exports.ApplicationStatus = ApplicationStatus;