export let DestinyObjectiveGrantStyle;
(function (DestinyObjectiveGrantStyle) {
    DestinyObjectiveGrantStyle[
        (DestinyObjectiveGrantStyle['WhenIncomplete'] = 0)
    ] = 'WhenIncomplete';
    DestinyObjectiveGrantStyle[
        (DestinyObjectiveGrantStyle['WhenComplete'] = 1)
    ] = 'WhenComplete';
    DestinyObjectiveGrantStyle[(DestinyObjectiveGrantStyle['Always'] = 2)] =
        'Always';
})(DestinyObjectiveGrantStyle || (DestinyObjectiveGrantStyle = {}));
