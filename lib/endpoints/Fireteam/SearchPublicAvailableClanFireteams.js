import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function searchPublicAvailableClanFireteams(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Fireteam/Search/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.page}/`,
            params: {
                excludeImmediate: params.excludeImmediate,
                langFilter: params.langFilter
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
