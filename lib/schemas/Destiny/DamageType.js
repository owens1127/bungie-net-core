export let DamageType;
(function (DamageType) {
    DamageType[(DamageType['None'] = 0)] = 'None';
    DamageType[(DamageType['Kinetic'] = 1)] = 'Kinetic';
    DamageType[(DamageType['Arc'] = 2)] = 'Arc';
    DamageType[(DamageType['Thermal'] = 3)] = 'Thermal';
    DamageType[(DamageType['Void'] = 4)] = 'Void';
    DamageType[(DamageType['Raid'] = 5)] = 'Raid';
    DamageType[(DamageType['Stasis'] = 6)] = 'Stasis';
    DamageType[(DamageType['Strand'] = 7)] = 'Strand';
})(DamageType || (DamageType = {}));
