

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPostsThreadedPagedFromChild(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}