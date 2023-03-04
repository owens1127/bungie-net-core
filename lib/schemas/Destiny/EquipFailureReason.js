export let EquipFailureReason;
(function (EquipFailureReason) {
    EquipFailureReason[(EquipFailureReason['None'] = 0)] = 'None';
    EquipFailureReason[(EquipFailureReason['ItemUnequippable'] = 1)] =
        'ItemUnequippable';
    EquipFailureReason[(EquipFailureReason['ItemUniqueEquipRestricted'] = 2)] =
        'ItemUniqueEquipRestricted';
    EquipFailureReason[(EquipFailureReason['ItemFailedUnlockCheck'] = 4)] =
        'ItemFailedUnlockCheck';
    EquipFailureReason[(EquipFailureReason['ItemFailedLevelCheck'] = 8)] =
        'ItemFailedLevelCheck';
    EquipFailureReason[(EquipFailureReason['ItemWrapped'] = 16)] =
        'ItemWrapped';
    EquipFailureReason[(EquipFailureReason['ItemNotLoaded'] = 32)] =
        'ItemNotLoaded';
    EquipFailureReason[(EquipFailureReason['ItemEquipBlocklisted'] = 64)] =
        'ItemEquipBlocklisted';
    EquipFailureReason[
        (EquipFailureReason['ItemLoadoutRequirementNotMet'] = 128)
    ] = 'ItemLoadoutRequirementNotMet';
})(EquipFailureReason || (EquipFailureReason = {}));
