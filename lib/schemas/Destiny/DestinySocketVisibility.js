

export let DestinySocketVisibility;
(function (DestinySocketVisibility) {
  DestinySocketVisibility[DestinySocketVisibility["Visible"] = 0] = "Visible";
  DestinySocketVisibility[DestinySocketVisibility["Hidden"] = 1] = "Hidden";
  DestinySocketVisibility[DestinySocketVisibility["HiddenWhenEmpty"] = 2] = "HiddenWhenEmpty";
  DestinySocketVisibility[DestinySocketVisibility["HiddenIfNoPlugsAvailable"] = 3] = "HiddenIfNoPlugsAvailable";
})(DestinySocketVisibility || (DestinySocketVisibility = {}));