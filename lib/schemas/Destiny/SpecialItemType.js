export let SpecialItemType;
(function (SpecialItemType) {
    SpecialItemType[(SpecialItemType['None'] = 0)] = 'None';
    SpecialItemType[(SpecialItemType['SpecialCurrency'] = 1)] =
        'SpecialCurrency';
    SpecialItemType[(SpecialItemType['Armor'] = 8)] = 'Armor';
    SpecialItemType[(SpecialItemType['Weapon'] = 9)] = 'Weapon';
    SpecialItemType[(SpecialItemType['Engram'] = 23)] = 'Engram';
    SpecialItemType[(SpecialItemType['Consumable'] = 24)] = 'Consumable';
    SpecialItemType[(SpecialItemType['ExchangeMaterial'] = 25)] =
        'ExchangeMaterial';
    SpecialItemType[(SpecialItemType['MissionReward'] = 27)] = 'MissionReward';
    SpecialItemType[(SpecialItemType['Currency'] = 29)] = 'Currency';
})(SpecialItemType || (SpecialItemType = {}));
