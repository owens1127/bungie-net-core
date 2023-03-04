import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getPostsThreadedPagedFromChild(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`,
            params: {
                showbanned: params.showbanned
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
