

export let DestinyProgressionRewardItemState;
(function (DestinyProgressionRewardItemState) {
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["None"] = 0] = "None";
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["Invisible"] = 1] = "Invisible";
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["Earned"] = 2] = "Earned";
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["Claimed"] = 4] = "Claimed";
  DestinyProgressionRewardItemState[DestinyProgressionRewardItemState["ClaimAllowed"] = 8] = "ClaimAllowed";
})(DestinyProgressionRewardItemState || (DestinyProgressionRewardItemState = {}));