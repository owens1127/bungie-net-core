export let Capabilities;
(function (Capabilities) {
    Capabilities[(Capabilities['None'] = 0)] = 'None';
    Capabilities[(Capabilities['Leaderboards'] = 1)] = 'Leaderboards';
    Capabilities[(Capabilities['Callsign'] = 2)] = 'Callsign';
    Capabilities[(Capabilities['OptionalConversations'] = 4)] =
        'OptionalConversations';
    Capabilities[(Capabilities['ClanBanner'] = 8)] = 'ClanBanner';
    Capabilities[(Capabilities['D2InvestmentData'] = 16)] = 'D2InvestmentData';
    Capabilities[(Capabilities['Tags'] = 32)] = 'Tags';
    Capabilities[(Capabilities['Alliances'] = 64)] = 'Alliances';
})(Capabilities || (Capabilities = {}));
