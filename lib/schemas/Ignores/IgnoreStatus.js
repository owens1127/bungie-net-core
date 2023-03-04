export let IgnoreStatus;
(function (IgnoreStatus) {
    IgnoreStatus[(IgnoreStatus['NotIgnored'] = 0)] = 'NotIgnored';
    IgnoreStatus[(IgnoreStatus['IgnoredUser'] = 1)] = 'IgnoredUser';
    IgnoreStatus[(IgnoreStatus['IgnoredGroup'] = 2)] = 'IgnoredGroup';
    IgnoreStatus[(IgnoreStatus['IgnoredByGroup'] = 4)] = 'IgnoredByGroup';
    IgnoreStatus[(IgnoreStatus['IgnoredPost'] = 8)] = 'IgnoredPost';
    IgnoreStatus[(IgnoreStatus['IgnoredTag'] = 16)] = 'IgnoredTag';
    IgnoreStatus[(IgnoreStatus['IgnoredGlobal'] = 32)] = 'IgnoredGlobal';
})(IgnoreStatus || (IgnoreStatus = {}));
