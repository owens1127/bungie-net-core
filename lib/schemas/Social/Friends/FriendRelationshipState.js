

export let FriendRelationshipState;
(function (FriendRelationshipState) {
  FriendRelationshipState[FriendRelationshipState["Unknown"] = 0] = "Unknown";
  FriendRelationshipState[FriendRelationshipState["Friend"] = 1] = "Friend";
  FriendRelationshipState[FriendRelationshipState["IncomingRequest"] = 2] = "IncomingRequest";
  FriendRelationshipState[FriendRelationshipState["OutgoingRequest"] = 3] = "OutgoingRequest";
})(FriendRelationshipState || (FriendRelationshipState = {}));