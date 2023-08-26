/**
 * Represents an object to make a Bungie API request with
 */
export type BungieFetchConfig = {
  url: URL;
  method: string;
  headers?: Record<string, string>;
  body?: any;
};

/**
 * A client for interacting with the Bungie.net API.
 * Implementing this protocol will allow you to interface with the methods
 * provided in this package.
 */
export interface BungieClientProtocol {
  fetch<T>(config: BungieFetchConfig): Promise<T>;
}

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
