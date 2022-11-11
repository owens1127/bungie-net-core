

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPostsThreadedPaged(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}