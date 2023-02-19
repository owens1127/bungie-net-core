

export let SocketPlugSources;
(function (SocketPlugSources) {
  SocketPlugSources[SocketPlugSources["None"] = 0] = "None";
  SocketPlugSources[SocketPlugSources["InventorySourced"] = 1] = "InventorySourced";
  SocketPlugSources[SocketPlugSources["ReusablePlugItems"] = 2] = "ReusablePlugItems";
  SocketPlugSources[SocketPlugSources["ProfilePlugSet"] = 4] = "ProfilePlugSet";
  SocketPlugSources[SocketPlugSources["CharacterPlugSet"] = 8] = "CharacterPlugSet";
})(SocketPlugSources || (SocketPlugSources = {}));