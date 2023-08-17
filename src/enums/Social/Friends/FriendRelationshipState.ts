/** @see {@link https://bungie-net.github.io/#/components/schemas/Social.Friends.FriendRelationshipState} */
export const FriendRelationshipState = {
  Unknown: 0,
  Friend: 1,
  IncomingRequest: 2,
  OutgoingRequest: 3
} as const;
