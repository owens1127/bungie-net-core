import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getHistoricalStats(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/`,
            params: {
                dayend: params.dayend,
                daystart: params.daystart,
                groups: params.groups ? params.groups.join(',') : undefined,
                modes: params.modes ? params.modes.join(',') : undefined,
                periodType: params.periodType
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
