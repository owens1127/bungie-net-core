import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function searchContentByTagAndType(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Content/SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
            params: {
                currentpage: params.currentpage,
                head: params.head,
                itemsperpage: params.itemsperpage
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
