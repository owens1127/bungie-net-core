import { EndpointTestSuite } from '../endpoints.test';
import {
  acceptFriendRequest,
  declineFriendRequest,
  getFriendList,
  getFriendRequestList,
  getPlatformFriendList,
  issueFriendRequest,
  removeFriend,
  removeFriendRequest
} from '../../src/endpoints/Social';

export const acceptFriendRequestTests: EndpointTestSuite<typeof acceptFriendRequest> = {
  endpoint: acceptFriendRequest,
  cases: []
};
export const declineFriendRequestTests: EndpointTestSuite<typeof declineFriendRequest> = {
  endpoint: declineFriendRequest,
  cases: []
};
export const getFriendListTests: EndpointTestSuite<typeof $1> = {
  endpoint: $1,
  cases: []
};
export const getFriendRequestListTests: EndpointTestSuite<typeof getFriendRequestList> = {
  endpoint: getFriendRequestList,
  cases: []
};
export const getPlatformFriendListTests: EndpointTestSuite<typeof getPlatformFriendList> = {
  endpoint: getPlatformFriendList,
  cases: []
};
export const issueFriendRequestTests: EndpointTestSuite<typeof issueFriendRequest> = {
  endpoint: issueFriendRequest,
  cases: []
};
export const removeFriendTests: EndpointTestSuite<typeof $1> = {
  endpoint: $1,
  cases: []
};
export const removeFriendRequestTests: EndpointTestSuite<typeof removeFriendRequest> = {
  endpoint: removeFriendRequest,
  cases: []
};
