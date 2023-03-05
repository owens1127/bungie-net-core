import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function getGroup(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/`
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
