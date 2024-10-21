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

import { BungieMembershipType } from '../models/BungieMembershipType';
import { BungieClientProtocol } from './..';
import { BungieNetResponse } from '../interfaces/BungieNetResponse';
import { addParam } from '../util';
import { DestinyFireteamFinderApplicationType } from '../models/FireteamFinder/DestinyFireteamFinderApplicationType';
import { DestinyFireteamFinderApplyToListingResponse } from '../models/FireteamFinder/DestinyFireteamFinderApplyToListingResponse';
import { DestinyFireteamFinderBulkGetListingStatusRequest } from '../models/FireteamFinder/DestinyFireteamFinderBulkGetListingStatusRequest';
import { DestinyFireteamFinderBulkGetListingStatusResponse } from '../models/FireteamFinder/DestinyFireteamFinderBulkGetListingStatusResponse';
import { DestinyFireteamFinderGetApplicationResponse } from '../models/FireteamFinder/DestinyFireteamFinderGetApplicationResponse';
import { DestinyFireteamFinderListing } from '../models/FireteamFinder/DestinyFireteamFinderListing';
import { DestinyFireteamFinderGetListingApplicationsResponse } from '../models/FireteamFinder/DestinyFireteamFinderGetListingApplicationsResponse';
import { DestinyFireteamFinderLobbyResponse } from '../models/FireteamFinder/DestinyFireteamFinderLobbyResponse';
import { DestinyFireteamFinderGetPlayerLobbiesResponse } from '../models/FireteamFinder/DestinyFireteamFinderGetPlayerLobbiesResponse';
import { DestinyFireteamFinderGetPlayerApplicationsResponse } from '../models/FireteamFinder/DestinyFireteamFinderGetPlayerApplicationsResponse';
import { DestinyFireteamFinderGetPlayerOffersResponse } from '../models/FireteamFinder/DestinyFireteamFinderGetPlayerOffersResponse';
import { DestinyFireteamFinderGetCharacterActivityAccessResponse } from '../models/FireteamFinder/DestinyFireteamFinderGetCharacterActivityAccessResponse';
import { DestinyFireteamFinderOffer } from '../models/FireteamFinder/DestinyFireteamFinderOffer';
import { DestinyFireteamFinderGetLobbyOffersResponse } from '../models/FireteamFinder/DestinyFireteamFinderGetLobbyOffersResponse';
import { DestinyFireteamFinderHostLobbyRequest } from '../models/FireteamFinder/DestinyFireteamFinderHostLobbyRequest';
import { DestinyFireteamFinderHostLobbyResponse } from '../models/FireteamFinder/DestinyFireteamFinderHostLobbyResponse';
import { DestinyFireteamFinderJoinLobbyRequest } from '../models/FireteamFinder/DestinyFireteamFinderJoinLobbyRequest';
import { DestinyFireteamFinderKickPlayerRequest } from '../models/FireteamFinder/DestinyFireteamFinderKickPlayerRequest';
import { DestinyFireteamFinderRespondToApplicationRequest } from '../models/FireteamFinder/DestinyFireteamFinderRespondToApplicationRequest';
import { DestinyFireteamFinderRespondToApplicationResponse } from '../models/FireteamFinder/DestinyFireteamFinderRespondToApplicationResponse';
import { DestinyFireteamFinderRespondToAuthenticationRequest } from '../models/FireteamFinder/DestinyFireteamFinderRespondToAuthenticationRequest';
import { DestinyFireteamFinderRespondToAuthenticationResponse } from '../models/FireteamFinder/DestinyFireteamFinderRespondToAuthenticationResponse';
import { DestinyFireteamFinderRespondToOfferRequest } from '../models/FireteamFinder/DestinyFireteamFinderRespondToOfferRequest';
import { DestinyFireteamFinderRespondToOfferResponse } from '../models/FireteamFinder/DestinyFireteamFinderRespondToOfferResponse';
import { DestinyFireteamFinderSearchListingsByClanRequest } from '../models/FireteamFinder/DestinyFireteamFinderSearchListingsByClanRequest';
import { DestinyFireteamFinderSearchListingsByClanResponse } from '../models/FireteamFinder/DestinyFireteamFinderSearchListingsByClanResponse';
import { DestinyFireteamFinderSearchListingsByFiltersRequest } from '../models/FireteamFinder/DestinyFireteamFinderSearchListingsByFiltersRequest';
import { DestinyFireteamFinderSearchListingsByFiltersResponse } from '../models/FireteamFinder/DestinyFireteamFinderSearchListingsByFiltersResponse';
import { DestinyFireteamFinderUpdateLobbySettingsRequest } from '../models/FireteamFinder/DestinyFireteamFinderUpdateLobbySettingsRequest';
import { DestinyFireteamFinderUpdateLobbySettingsResponse } from '../models/FireteamFinder/DestinyFireteamFinderUpdateLobbySettingsResponse';

/**
 * Activates a lobby and initializes it as an active Fireteam.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.ActivateLobby}
 */
export async function activateLobby(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** Optional boolean to forcibly activate the lobby, kicking pending applicants. */
    forceActivation?: boolean;
    /** The ID of the lobby to activate. */
    lobbyId: string;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/Activate/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  addParam(url, params.forceActivation, 'forceActivation');
  return client.fetch({ method: 'POST', url });
}

/**
 * Activates a lobby and initializes it as an active Fireteam, returning the
 * updated Listing ID.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.ActivateLobbyForNewListingId}
 */
export async function activateLobbyForNewListingId(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** Optional boolean to forcibly activate the lobby, kicking pending applicants. */
    forceActivation?: boolean;
    /** The ID of the lobby to activate. */
    lobbyId: string;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/ActivateForNewListingId/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  addParam(url, params.forceActivation, 'forceActivation');
  return client.fetch({ method: 'POST', url });
}

/**
 * Applies to have a character join a fireteam.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.ApplyToListing}
 */
export async function applyToListing(
  client: BungieClientProtocol,
  params: {
    /** The type of application to apply */
    applicationType: DestinyFireteamFinderApplicationType;
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** The id of the listing to apply to */
    listingId: string;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderApplyToListingResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Listing/${params.listingId}/Apply/${params.applicationType}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Retrieves Fireteam listing statuses in bulk.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.BulkGetListingStatus}
 */
export async function bulkGetListingStatus(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  },
  body: DestinyFireteamFinderBulkGetListingStatusRequest
): Promise<BungieNetResponse<DestinyFireteamFinderBulkGetListingStatusResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Listing/BulkStatus/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Retrieves a Fireteam application.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetApplication}
 */
export async function getApplication(
  client: BungieClientProtocol,
  params: {
    applicationId: string;
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderGetApplicationResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Application/${params.applicationId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves a Fireteam listing.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetListing}
 */
export async function getListing(
  client: BungieClientProtocol,
  params: {
    /** The ID of the listing to retrieve. */
    listingId: string;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderListing>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Listing/${params.listingId}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves all applications to a Fireteam Finder listing.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetListingApplications}
 */
export async function getListingApplications(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** Optional flag representing a filter on the state of the application. */
    flags?: string;
    /** The ID of the listing whose applications to retrieve. */
    listingId: string;
    /** An optional token from a previous response to fetch the next page of results. */
    nextPageToken?: string;
    /** The maximum number of results to be returned with this page. */
    pageSize?: number;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderGetListingApplicationsResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Listing/${params.listingId}/Applications/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  addParam(url, params.flags, 'flags');
  addParam(url, params.nextPageToken, 'nextPageToken');
  addParam(url, params.pageSize, 'pageSize');
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves the information for a Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetLobby}
 */
export async function getLobby(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** The ID of the lobby to retrieve. */
    lobbyId: string;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderLobbyResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves the information for a Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetPlayerLobbies}
 */
export async function getPlayerLobbies(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** An optional token from a previous response to fetch the next page of results. */
    nextPageToken?: string;
    /** The maximum number of results to be returned with this page. */
    pageSize?: number;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderGetPlayerLobbiesResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/PlayerLobbies/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  addParam(url, params.nextPageToken, 'nextPageToken');
  addParam(url, params.pageSize, 'pageSize');
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves Fireteam applications that this player has sent or recieved.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetPlayerApplications}
 */
export async function getPlayerApplications(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** An optional token from a previous response to fetch the next page of results. */
    nextPageToken?: string;
    /** The maximum number of results to be returned with this page. */
    pageSize?: number;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderGetPlayerApplicationsResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/PlayerApplications/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  addParam(url, params.nextPageToken, 'nextPageToken');
  addParam(url, params.pageSize, 'pageSize');
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves Fireteam offers that this player has recieved.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetPlayerOffers}
 */
export async function getPlayerOffers(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** An optional token from a previous response to fetch the next page of results. */
    nextPageToken?: string;
    /** The maximum number of results to be returned with this page. */
    pageSize?: number;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderGetPlayerOffersResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/PlayerOffers/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  addParam(url, params.nextPageToken, 'nextPageToken');
  addParam(url, params.pageSize, 'pageSize');
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves the information for a Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetCharacterActivityAccess}
 */
export async function getCharacterActivityAccess(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderGetCharacterActivityAccessResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/CharacterActivityAccess/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves an offer to a Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetOffer}
 */
export async function getOffer(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** The unique ID of the offer. */
    offerId: string;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderOffer>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Offer/${params.offerId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Retrieves all offers relevant to a Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.GetLobbyOffers}
 */
export async function getLobbyOffers(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** The unique ID of the lobby. */
    lobbyId: string;
    /** An optional token from a previous response to fetch the next page of results. */
    nextPageToken?: string;
    /** The maximum number of results to be returned with this page. */
    pageSize?: number;
  }
): Promise<BungieNetResponse<DestinyFireteamFinderGetLobbyOffersResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/${params.lobbyId}/Offers/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  addParam(url, params.nextPageToken, 'nextPageToken');
  addParam(url, params.pageSize, 'pageSize');
  return client.fetch({ method: 'GET', url });
}

/**
 * Creates a new Fireteam lobby and Fireteam Finder listing.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.HostLobby}
 */
export async function hostLobby(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  },
  body: DestinyFireteamFinderHostLobbyRequest
): Promise<BungieNetResponse<DestinyFireteamFinderHostLobbyResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/Host/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Sends a request to join an available Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.JoinLobby}
 */
export async function joinLobby(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  },
  body: DestinyFireteamFinderJoinLobbyRequest
): Promise<BungieNetResponse<DestinyFireteamFinderLobbyResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/Join/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Kicks a player from a Fireteam Finder lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.KickPlayer}
 */
export async function kickPlayer(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** The ID of the lobby to kick the player from. */
    lobbyId: string;
    /** A valid Destiny membership ID of the player to kick. */
    targetMembershipId: string;
  },
  body: DestinyFireteamFinderKickPlayerRequest
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/${params.lobbyId}/KickPlayer/${params.targetMembershipId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Sends a request to leave a Fireteam listing application.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.LeaveApplication}
 */
export async function leaveApplication(
  client: BungieClientProtocol,
  params: {
    /** The ID of the application to leave. */
    applicationId: string;
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Application/Leave/${params.applicationId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Sends a request to leave a Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.LeaveLobby}
 */
export async function leaveLobby(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** The ID of the lobby to leave. */
    lobbyId: string;
  }
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/Leave/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Responds to an application sent to a Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.RespondToApplication}
 */
export async function respondToApplication(
  client: BungieClientProtocol,
  params: {
    /** The application ID to respond to. */
    applicationId: string;
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  },
  body: DestinyFireteamFinderRespondToApplicationRequest
): Promise<BungieNetResponse<DestinyFireteamFinderRespondToApplicationResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Application/Respond/${params.applicationId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Responds to an authentication request for a Fireteam.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.RespondToAuthentication}
 */
export async function respondToAuthentication(
  client: BungieClientProtocol,
  params: {
    /** The ID of the application whose authentication to confirm. */
    applicationId: string;
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  },
  body: DestinyFireteamFinderRespondToAuthenticationRequest
): Promise<BungieNetResponse<DestinyFireteamFinderRespondToAuthenticationResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Authentication/Respond/${params.applicationId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Responds to a Fireteam lobby offer.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.RespondToOffer}
 */
export async function respondToOffer(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** The unique ID of the offer. */
    offerId: string;
  },
  body: DestinyFireteamFinderRespondToOfferRequest
): Promise<BungieNetResponse<DestinyFireteamFinderRespondToOfferResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Offer/Respond/${params.offerId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Returns search results for available Fireteams provided a clan.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.SearchListingsByClan}
 */
export async function searchListingsByClan(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  },
  body: DestinyFireteamFinderSearchListingsByClanRequest
): Promise<BungieNetResponse<DestinyFireteamFinderSearchListingsByClanResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Search/Clan/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Returns search results for available Fireteams provided search filters.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.SearchListingsByFilters}
 */
export async function searchListingsByFilters(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
  },
  body: DestinyFireteamFinderSearchListingsByFiltersRequest
): Promise<BungieNetResponse<DestinyFireteamFinderSearchListingsByFiltersResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Search/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Updates the settings for a Fireteam lobby.
 * @see {@link https://bungie-net.github.io/#FireteamFinder.UpdateLobbySettings}
 */
export async function updateLobbySettings(
  client: BungieClientProtocol,
  params: {
    /** A valid Destiny character ID. */
    destinyCharacterId: string;
    /** A valid Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid Destiny membership type. */
    destinyMembershipType: BungieMembershipType;
    /** The ID of the lobby to update. */
    lobbyId: string;
  },
  body: DestinyFireteamFinderUpdateLobbySettingsRequest
): Promise<BungieNetResponse<DestinyFireteamFinderUpdateLobbySettingsResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/FireteamFinder/Lobby/UpdateSettings/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}
