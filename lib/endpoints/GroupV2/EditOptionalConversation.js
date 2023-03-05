import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function editOptionalConversation(params, body) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'POST',
            url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/Edit/${params.conversationId}/`,
            body
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
