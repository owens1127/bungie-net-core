/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { BungieClientProtocol } from './..';
import { BungieNetResponse } from '../interfaces/BungieNetResponse';
import { GeneralUser } from '../models/User/GeneralUser';
import { BungieCredentialType } from '../enums/BungieCredentialType';
import { GetCredentialTypesForAccountResponse } from '../models/User/Models/GetCredentialTypesForAccountResponse';
import { UserTheme } from '../models/Config/UserTheme';
import { BungieMembershipType } from '../enums/BungieMembershipType';
import { UserMembershipData } from '../models/User/UserMembershipData';
import { HardLinkedUserMembership } from '../models/User/HardLinkedUserMembership';
import { UserSearchResponse } from '../models/User/UserSearchResponse';
import { UserSearchPrefixRequest } from '../models/User/UserSearchPrefixRequest';

/**
 * Loads a bungienet user by membership id.
 * @see {@link https://bungie-net.github.io/#User.GetBungieNetUserById}
 */
export async function getBungieNetUserById(
  client: BungieClientProtocol,
  params: {
    /** The requested Bungie.net membership id. */
    id: string;
  }
): Promise<BungieNetResponse<GeneralUser>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/GetBungieNetUserById/${params.id}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets a list of all display names linked to this membership id but sanitized (
 * profanity filtered). Obeys all visibility rules of calling user and is heavily
 * cached.
 * @see {@link https://bungie-net.github.io/#User.GetSanitizedPlatformDisplayNames}
 */
export async function getSanitizedPlatformDisplayNames(
  client: BungieClientProtocol,
  params: {
    /** The requested membership id to load. */
    membershipId: string;
  }
): Promise<BungieNetResponse<{ [key in BungieCredentialType]: string }>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/GetSanitizedPlatformDisplayNames/${params.membershipId}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a list of credential types attached to the requested account
 * @see {@link https://bungie-net.github.io/#User.GetCredentialTypesForTargetAccount}
 */
export async function getCredentialTypesForTargetAccount(
  client: BungieClientProtocol,
  params: {
    /** The user's membership id */
    membershipId: string;
  }
): Promise<BungieNetResponse<GetCredentialTypesForAccountResponse[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/GetCredentialTypesForTargetAccount/${params.membershipId}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a list of all available user themes.
 * @see {@link https://bungie-net.github.io/#User.GetAvailableThemes}
 */
export async function getAvailableThemes(
  client: BungieClientProtocol
): Promise<BungieNetResponse<UserTheme[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/GetAvailableThemes/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a list of accounts associated with the supplied membership ID and
 * membership type. This will include all linked accounts (even when hidden) if
 * supplied credentials permit it.
 * @see {@link https://bungie-net.github.io/#User.GetMembershipDataById}
 */
export async function getMembershipDataById(
  client: BungieClientProtocol,
  params: {
    /** The membership ID of the target user. */
    membershipId: string;
    /** Type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<UserMembershipData>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/GetMembershipsById/${params.membershipId}/${params.membershipType}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a list of accounts associated with signed in user. This is useful for
 * OAuth implementations that do not give you access to the token response.
 * @see {@link https://bungie-net.github.io/#User.GetMembershipDataForCurrentUser}
 */
export async function getMembershipDataForCurrentUser(
  client: BungieClientProtocol
): Promise<BungieNetResponse<UserMembershipData>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets any hard linked membership given a credential. Only works for credentials
 * that are public (just SteamID64 right now). Cross Save aware.
 * @see {@link https://bungie-net.github.io/#User.GetMembershipFromHardLinkedCredential}
 */
export async function getMembershipFromHardLinkedCredential(
  client: BungieClientProtocol,
  params: {
    /** The credential to look up. Must be a valid SteamID64. */
    credential: string;
    /** The credential type. 'SteamId' is the only valid value at present. */
    crType: BungieCredentialType;
  }
): Promise<BungieNetResponse<HardLinkedUserMembership>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/GetMembershipFromHardLinkedCredential/${params.crType}/${params.credential}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
 * @see {@link https://bungie-net.github.io/#User.SearchByGlobalNamePrefix}
 */
export async function searchByGlobalNamePrefix(
  client: BungieClientProtocol,
  params: {
    /** The display name prefix you're looking for. */
    displayNamePrefix: string;
    /** The zero-based page of results you desire. */
    page: number;
  }
): Promise<BungieNetResponse<UserSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/Search/Prefix/${params.displayNamePrefix}/${params.page}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Given the prefix of a global display name, returns all users who share that name.
 * @see {@link https://bungie-net.github.io/#User.SearchByGlobalNamePost}
 */
export async function searchByGlobalNamePost(
  client: BungieClientProtocol,
  params: {
    /** The zero-based page of results you desire. */
    page: number;
  },
  body: UserSearchPrefixRequest
): Promise<BungieNetResponse<UserSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/Search/GlobalName/${params.page}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}
