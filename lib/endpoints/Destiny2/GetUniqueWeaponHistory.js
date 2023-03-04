import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getUniqueWeaponHistory(params) {
    const token = this?.client?.access_token ?? this?.access_token ?? null;
    try {
        return await rateLimitedRequest(token, {
            method: 'GET',
            url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/UniqueWeapons/`
        });
    } catch (err) {
        if (err instanceof BungieAPIError) err.stack = new Error().stack;
        throw err;
    }
}
