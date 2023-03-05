import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function getCommunityContent(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
