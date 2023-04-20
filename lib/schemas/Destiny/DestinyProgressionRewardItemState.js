"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestinyProgressionRewardItemState = void 0;
let DestinyProgressionRewardItemState = function (DestinyProgressionRewardItemState) {
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["None"] = 0] = "None";
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["Invisible"] = 1] = "Invisible";
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["Earned"] = 2] = "Earned";
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["Claimed"] = 4] = "Claimed";
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["ClaimAllowed"] = 8] = "ClaimAllowed";
  return DestinyProgressionRewardItemState;
}({});
exports.DestinyProgressionRewardItemState = DestinyProgressionRewardItemState;