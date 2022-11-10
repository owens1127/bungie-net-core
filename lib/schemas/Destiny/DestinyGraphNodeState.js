

export let DestinyGraphNodeState;
(function (DestinyGraphNodeState) {
  DestinyGraphNodeState[DestinyGraphNodeState["Hidden"] = 0] = "Hidden";
  DestinyGraphNodeState[DestinyGraphNodeState["Visible"] = 1] = "Visible";
  DestinyGraphNodeState[DestinyGraphNodeState["Teaser"] = 2] = "Teaser";
  DestinyGraphNodeState[DestinyGraphNodeState["Incomplete"] = 3] = "Incomplete";
  DestinyGraphNodeState[DestinyGraphNodeState["Completed"] = 4] = "Completed";
})(DestinyGraphNodeState || (DestinyGraphNodeState = {}));