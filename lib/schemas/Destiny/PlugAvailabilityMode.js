

export let PlugAvailabilityMode;
(function (PlugAvailabilityMode) {
  PlugAvailabilityMode[PlugAvailabilityMode["Normal"] = 0] = "Normal";
  PlugAvailabilityMode[PlugAvailabilityMode["UnavailableIfSocketContainsMatchingPlugCategory"] = 1] = "UnavailableIfSocketContainsMatchingPlugCategory";
  PlugAvailabilityMode[PlugAvailabilityMode["AvailableIfSocketContainsMatchingPlugCategory"] = 2] = "AvailableIfSocketContainsMatchingPlugCategory";
})(PlugAvailabilityMode || (PlugAvailabilityMode = {}));