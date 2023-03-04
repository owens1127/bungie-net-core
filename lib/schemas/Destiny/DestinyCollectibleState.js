export let DestinyCollectibleState;
(function (DestinyCollectibleState) {
    DestinyCollectibleState[(DestinyCollectibleState['None'] = 0)] = 'None';
    DestinyCollectibleState[(DestinyCollectibleState['NotAcquired'] = 1)] =
        'NotAcquired';
    DestinyCollectibleState[(DestinyCollectibleState['Obscured'] = 2)] =
        'Obscured';
    DestinyCollectibleState[(DestinyCollectibleState['Invisible'] = 4)] =
        'Invisible';
    DestinyCollectibleState[
        (DestinyCollectibleState['CannotAffordMaterialRequirements'] = 8)
    ] = 'CannotAffordMaterialRequirements';
    DestinyCollectibleState[
        (DestinyCollectibleState['InventorySpaceUnavailable'] = 16)
    ] = 'InventorySpaceUnavailable';
    DestinyCollectibleState[
        (DestinyCollectibleState['UniquenessViolation'] = 32)
    ] = 'UniquenessViolation';
    DestinyCollectibleState[
        (DestinyCollectibleState['PurchaseDisabled'] = 64)
    ] = 'PurchaseDisabled';
})(DestinyCollectibleState || (DestinyCollectibleState = {}));
