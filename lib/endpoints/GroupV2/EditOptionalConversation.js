

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function EditOptionalConversation(params, body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/Edit/${params.conversationId}/`,
    body
  });
}