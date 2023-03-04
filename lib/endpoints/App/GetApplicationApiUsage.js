import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getApplicationApiUsage(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/App/ApiUsage/${params.applicationId}/`,
            params: {
                end: params.end,
                start: params.start
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
