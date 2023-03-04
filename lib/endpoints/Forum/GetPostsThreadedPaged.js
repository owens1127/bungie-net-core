import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getPostsThreadedPaged(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`,
            params: {
                showbanned: params.showbanned
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
