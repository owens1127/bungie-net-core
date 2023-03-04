export let DestinyJoinClosedReasons;
(function (DestinyJoinClosedReasons) {
    DestinyJoinClosedReasons[(DestinyJoinClosedReasons['None'] = 0)] = 'None';
    DestinyJoinClosedReasons[(DestinyJoinClosedReasons['InMatchmaking'] = 1)] =
        'InMatchmaking';
    DestinyJoinClosedReasons[(DestinyJoinClosedReasons['Loading'] = 2)] =
        'Loading';
    DestinyJoinClosedReasons[(DestinyJoinClosedReasons['SoloMode'] = 4)] =
        'SoloMode';
    DestinyJoinClosedReasons[
        (DestinyJoinClosedReasons['InternalReasons'] = 8)
    ] = 'InternalReasons';
    DestinyJoinClosedReasons[
        (DestinyJoinClosedReasons['DisallowedByGameState'] = 16)
    ] = 'DisallowedByGameState';
    DestinyJoinClosedReasons[(DestinyJoinClosedReasons['Offline'] = 32768)] =
        'Offline';
})(DestinyJoinClosedReasons || (DestinyJoinClosedReasons = {}));
