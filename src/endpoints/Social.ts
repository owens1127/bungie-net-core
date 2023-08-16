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
import { BungieFriendListResponse } from '../models/Social/Friends/BungieFriendListResponse';
import { BungieFriendRequestListResponse } from '../models/Social/Friends/BungieFriendRequestListResponse';
import { PlatformFriendType } from '../enums/Social/Friends/PlatformFriendType';
import { PlatformFriendResponse } from '../models/Social/Friends/PlatformFriendResponse';

/**
 * Returns your Bungie Friend list
 * @see {@link https://bungie-net.github.io/#Social.GetFriendList}
 */
export async function getFriendList(
  client: BungieClientProtocol
): Promise<BungieNetResponse<BungieFriendListResponse>> {
  const url = new URL(`https://www.bungie.net/Platform/Social/Friends/`);
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns your friend request queue.
 * @see {@link https://bungie-net.github.io/#Social.GetFriendRequestList}
 */
export async function getFriendRequestList(
  client: BungieClientProtocol
): Promise<BungieNetResponse<BungieFriendRequestListResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Social/Friends/Requests/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Requests a friend relationship with the target user. Any of the target user's
 * linked membership ids are valid inputs.
 * @see {@link https://bungie-net.github.io/#Social.IssueFriendRequest}
 */
export async function issueFriendRequest(
  client: BungieClientProtocol,
  params: {
    /** The membership id of the user you wish to add. */
    membershipId: string;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Social/Friends/Add/${params.membershipId}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Accepts a friend relationship with the target user. The user must be on your
 * incoming friend request list, though no error will occur if they are not.
 * @see {@link https://bungie-net.github.io/#Social.AcceptFriendRequest}
 */
export async function acceptFriendRequest(
  client: BungieClientProtocol,
  params: {
    /** The membership id of the user you wish to accept. */
    membershipId: string;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Social/Friends/Requests/Accept/${params.membershipId}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Declines a friend relationship with the target user. The user must be on your
 * incoming friend request list, though no error will occur if they are not.
 * @see {@link https://bungie-net.github.io/#Social.DeclineFriendRequest}
 */
export async function declineFriendRequest(
  client: BungieClientProtocol,
  params: {
    /** The membership id of the user you wish to decline. */
    membershipId: string;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Social/Friends/Requests/Decline/${params.membershipId}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Remove a friend relationship with the target user. The user must be on your
 * friend list, though no error will occur if they are not.
 * @see {@link https://bungie-net.github.io/#Social.RemoveFriend}
 */
export async function removeFriend(
  client: BungieClientProtocol,
  params: {
    /** The membership id of the user you wish to remove. */
    membershipId: string;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Social/Friends/Remove/${params.membershipId}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Remove a friend relationship with the target user. The user must be on your
 * outgoing request friend list, though no error will occur if they are not.
 * @see {@link https://bungie-net.github.io/#Social.RemoveFriendRequest}
 */
export async function removeFriendRequest(
  client: BungieClientProtocol,
  params: {
    /** The membership id of the user you wish to remove. */
    membershipId: string;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Social/Friends/Requests/Remove/${params.membershipId}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Gets the platform friend of the requested type, with additional information if
 * they have Bungie accounts. Must have a recent login session with said platform.
 * @see {@link https://bungie-net.github.io/#Social.GetPlatformFriendList}
 */
export async function getPlatformFriendList(
  client: BungieClientProtocol,
  params: {
    /** The platform friend type. */
    friendPlatform: PlatformFriendType;
    /** The zero based page to return. Page size is 100. */
    page: string;
  }
): Promise<BungieNetResponse<PlatformFriendResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Social/PlatformFriends/${params.friendPlatform}/${params.page}/`
  );
  return client.fetch({ method: 'GET', url });
}
