/**
 * Represents a method that can be used to make a request to the Bungie API.
 */
export type BungieHttpProtocol = <R, B = unknown>(config: {
  baseUrl: string;
  searchParams?: URLSearchParams;
  method: 'GET' | 'POST';
  body?: B;
  contentType?: 'application/json' | 'application/x-www-form-urlencoded';
}) => Promise<R>;

export * as App from './endpoints/App';
export * as CommunityContent from './endpoints/CommunityContent';
export * as Content from './endpoints/Content';
export * as Core from './endpoints/Core';
export * as Destiny2 from './endpoints/Destiny2';
export * as FireTeam from './endpoints/Fireteam';
export * as Forum from './endpoints/Forum';
export * as GroupV2 from './endpoints/GroupV2';
export * as Social from './endpoints/Social';
export * as Tokens from './endpoints/Tokens';
export * as Trending from './endpoints/Trending';
export * as User from './endpoints/User';
