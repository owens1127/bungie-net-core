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
