"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FriendRelationshipState = void 0;
let FriendRelationshipState = function (FriendRelationshipState) {
  FriendRelationshipState[FriendRelationshipState["Unknown"] = 0] = "Unknown";
  FriendRelationshipState[FriendRelationshipState["Friend"] = 1] = "Friend";
  FriendRelationshipState[FriendRelationshipState["IncomingRequest"] = 2] = "IncomingRequest";
  FriendRelationshipState[FriendRelationshipState["OutgoingRequest"] = 3] = "OutgoingRequest";
  return FriendRelationshipState;
}({});
exports.FriendRelationshipState = FriendRelationshipState;