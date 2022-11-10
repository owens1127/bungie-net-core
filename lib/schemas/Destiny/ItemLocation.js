

export let ItemLocation;
(function (ItemLocation) {
  ItemLocation[ItemLocation["Unknown"] = 0] = "Unknown";
  ItemLocation[ItemLocation["Inventory"] = 1] = "Inventory";
  ItemLocation[ItemLocation["Vault"] = 2] = "Vault";
  ItemLocation[ItemLocation["Vendor"] = 3] = "Vendor";
  ItemLocation[ItemLocation["Postmaster"] = 4] = "Postmaster";
})(ItemLocation || (ItemLocation = {}));