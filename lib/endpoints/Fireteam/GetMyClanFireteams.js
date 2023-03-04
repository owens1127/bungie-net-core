import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getMyClanFireteams(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/My/${params.platform}/${params.includeClosed}/${params.page}/`,
            params: {
                groupFilter: params.groupFilter,
                langFilter: params.langFilter
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
