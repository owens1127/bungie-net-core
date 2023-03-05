import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function getUserSystemOverrides() {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: 'https://www.bungie.net/Platform/UserSystemOverrides/'
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
