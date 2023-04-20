"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentPrivacySetting = void 0;
let ComponentPrivacySetting = function (ComponentPrivacySetting) {
  ComponentPrivacySetting[ComponentPrivacySetting["None"] = 0] = "None";
  ComponentPrivacySetting[ComponentPrivacySetting["Public"] = 1] = "Public";
  ComponentPrivacySetting[ComponentPrivacySetting["Private"] = 2] = "Private";
  return ComponentPrivacySetting;
}({});
exports.ComponentPrivacySetting = ComponentPrivacySetting;