export let DestinyRecordState;
(function (DestinyRecordState) {
    DestinyRecordState[(DestinyRecordState['None'] = 0)] = 'None';
    DestinyRecordState[(DestinyRecordState['RecordRedeemed'] = 1)] =
        'RecordRedeemed';
    DestinyRecordState[(DestinyRecordState['RewardUnavailable'] = 2)] =
        'RewardUnavailable';
    DestinyRecordState[(DestinyRecordState['ObjectiveNotCompleted'] = 4)] =
        'ObjectiveNotCompleted';
    DestinyRecordState[(DestinyRecordState['Obscured'] = 8)] = 'Obscured';
    DestinyRecordState[(DestinyRecordState['Invisible'] = 16)] = 'Invisible';
    DestinyRecordState[(DestinyRecordState['EntitlementUnowned'] = 32)] =
        'EntitlementUnowned';
    DestinyRecordState[(DestinyRecordState['CanEquipTitle'] = 64)] =
        'CanEquipTitle';
})(DestinyRecordState || (DestinyRecordState = {}));
