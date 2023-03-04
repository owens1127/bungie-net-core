export let DestinyVendorItemRefundPolicy;
(function (DestinyVendorItemRefundPolicy) {
    DestinyVendorItemRefundPolicy[
        (DestinyVendorItemRefundPolicy['NotRefundable'] = 0)
    ] = 'NotRefundable';
    DestinyVendorItemRefundPolicy[
        (DestinyVendorItemRefundPolicy['DeletesItem'] = 1)
    ] = 'DeletesItem';
    DestinyVendorItemRefundPolicy[
        (DestinyVendorItemRefundPolicy['RevokesLicense'] = 2)
    ] = 'RevokesLicense';
})(DestinyVendorItemRefundPolicy || (DestinyVendorItemRefundPolicy = {}));
