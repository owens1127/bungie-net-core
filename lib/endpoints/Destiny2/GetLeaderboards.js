import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function getLeaderboards(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Stats/Leaderboards/`,
            params: {
                maxtop: params.maxtop,
                modes: params.modes,
                statid: params.statid
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
