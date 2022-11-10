

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetPostAndParentAwaitingApproval(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParentAwaitingApproval/${params.childPostId}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}