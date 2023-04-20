"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyGraphNodeState = void 0;
let DestinyGraphNodeState = function (DestinyGraphNodeState) {
  DestinyGraphNodeState[DestinyGraphNodeState["Hidden"] = 0] = "Hidden";
  DestinyGraphNodeState[DestinyGraphNodeState["Visible"] = 1] = "Visible";
  DestinyGraphNodeState[DestinyGraphNodeState["Teaser"] = 2] = "Teaser";
  DestinyGraphNodeState[DestinyGraphNodeState["Incomplete"] = 3] = "Incomplete";
  DestinyGraphNodeState[DestinyGraphNodeState["Completed"] = 4] = "Completed";
  return DestinyGraphNodeState;
}({});
exports.DestinyGraphNodeState = DestinyGraphNodeState;