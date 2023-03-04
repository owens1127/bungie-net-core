export let GroupApplicationResolveState;
(function (GroupApplicationResolveState) {
    GroupApplicationResolveState[
        (GroupApplicationResolveState['Unresolved'] = 0)
    ] = 'Unresolved';
    GroupApplicationResolveState[
        (GroupApplicationResolveState['Accepted'] = 1)
    ] = 'Accepted';
    GroupApplicationResolveState[(GroupApplicationResolveState['Denied'] = 2)] =
        'Denied';
    GroupApplicationResolveState[
        (GroupApplicationResolveState['Rescinded'] = 3)
    ] = 'Rescinded';
})(GroupApplicationResolveState || (GroupApplicationResolveState = {}));
