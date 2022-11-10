

export let ItemBindStatus;
(function (ItemBindStatus) {
  ItemBindStatus[ItemBindStatus["NotBound"] = 0] = "NotBound";
  ItemBindStatus[ItemBindStatus["BoundToCharacter"] = 1] = "BoundToCharacter";
  ItemBindStatus[ItemBindStatus["BoundToAccount"] = 2] = "BoundToAccount";
  ItemBindStatus[ItemBindStatus["BoundToGuild"] = 3] = "BoundToGuild";
})(ItemBindStatus || (ItemBindStatus = {}));