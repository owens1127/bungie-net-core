"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IgnoreStatus = void 0;
var IgnoreStatus = {
  NotIgnored: 0,
  IgnoredUser: 1,
  IgnoredGroup: 2,
  IgnoredByGroup: 4,
  IgnoredPost: 8,
  IgnoredTag: 16,
  IgnoredGlobal: 32
};
exports.IgnoreStatus = IgnoreStatus;