import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function getTopicsPaged(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Forum/GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
            params: {
                locales: params.locales,
                tagstring: params.tagstring
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
