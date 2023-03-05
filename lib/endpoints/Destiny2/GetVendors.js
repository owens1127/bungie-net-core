import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieAPIError } from '../../errors/BungieAPIError';
export async function getVendors(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
            params: {
                components: params.components
                    ? params.components.join(',')
                    : undefined,
                filter: params.filter
            }
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
