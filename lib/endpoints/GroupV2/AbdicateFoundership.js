import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function abdicateFoundership(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'POST',
            url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Admin/AbdicateFoundership/${params.membershipType}/${params.founderIdNew}/`
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
