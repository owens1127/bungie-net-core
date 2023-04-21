"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocketTypeActionType = void 0;
let SocketTypeActionType = function (SocketTypeActionType) {
  SocketTypeActionType[SocketTypeActionType["InsertPlug"] = 0] = "InsertPlug";
  SocketTypeActionType[SocketTypeActionType["InfuseItem"] = 1] = "InfuseItem";
  SocketTypeActionType[SocketTypeActionType["ReinitializeSocket"] = 2] = "ReinitializeSocket";
  return SocketTypeActionType;
}({});
exports.SocketTypeActionType = SocketTypeActionType;