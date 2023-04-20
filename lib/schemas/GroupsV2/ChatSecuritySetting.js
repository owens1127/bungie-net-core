"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatSecuritySetting = void 0;
let ChatSecuritySetting = function (ChatSecuritySetting) {
  ChatSecuritySetting[ChatSecuritySetting["Group"] = 0] = "Group";
  ChatSecuritySetting[ChatSecuritySetting["Admins"] = 1] = "Admins";
  return ChatSecuritySetting;
}({});
exports.ChatSecuritySetting = ChatSecuritySetting;