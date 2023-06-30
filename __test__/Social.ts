import { constants, TestCase } from './global-setup';
import {
  acceptFriendRequest,
  declineFriendRequest,
  getFriendList,
  getFriendRequestList,
  getPlatformFriendList,
  issueFriendRequest,
  removeFriend,
  removeFriendRequest
} from '../src/endpoints/Social';

export const acceptFriendRequestTests: TestCase<typeof acceptFriendRequest>[] =
  [];
export const declineFriendRequestTests: TestCase<
  typeof declineFriendRequest
>[] = [];
export const getFriendListTests: TestCase<typeof getFriendList>[] = [];
export const getFriendRequestListTests: TestCase<
  typeof getFriendRequestList
>[] = [];
export const getPlatformFriendListTests: TestCase<
  typeof getPlatformFriendList
>[] = [];
export const issueFriendRequestTests: TestCase<typeof issueFriendRequest>[] =
  [];
export const removeFriendTests: TestCase<typeof removeFriend>[] = [];
export const removeFriendRequestTests: TestCase<typeof removeFriendRequest>[] =
  [];
