import { getBungieEnv } from './env';
import { BungieNetResponse } from './interfaces/BungieNetResponse';
import { NotConfiguredError } from './errors/NotConfiguredError';
import { PlatformErrorCodes } from './models';
import { BungieAPIError } from './errors/BungieAPIError';

/**
 * Represents an object to make a Bungie API request with
 */
export type BungieFetchConfig = {
  url: string;
  method: string;
  params?: { [key: string]: any };
  body?: any;
};

/**
 * A client for interacting with the Bungie.net API.
 * Implementing this protocol will allow you to interface with the methods
 * provided in this package.
 */
export interface BungieClientProtocol {
  fetch<T>(config: BungieFetchConfig): Promise<BungieNetResponse<T>>;
}

/**
 * A basic implementation of the client. Use this as a reference when designing
 * your client if necessary
 */
export class BasicBungieClient implements BungieClientProtocol {
  accessToken?: string = undefined;
  async fetch<T>(config: BungieFetchConfig): Promise<BungieNetResponse<T>> {
    const apiKey = getBungieEnv().BUNGIE_API_KEY;
    if (!apiKey) {
      throw new NotConfiguredError(['BUNGIE_API_KEY']);
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey
    };
    if (this.accessToken)
      Object.defineProperty(headers, 'Authorization', {
        value: `Bearer ${this.accessToken}`
      });

    const body = config.body ? JSON.stringify(config.body) : null;

    const url = new URL(config.url);
    if (config.params)
      Object.entries(config.params)
        .filter(([_, value]) => !!value)
        .forEach(([key, value]) => url.searchParams.set(key, value));

    const payload = {
      method: config.method,
      body,
      headers
    };

    const res = await fetch(url, payload);
    const data: BungieNetResponse<T> = await res.json();
    if (data.ErrorCode !== PlatformErrorCodes.Success || !res.ok) {
      throw new BungieAPIError(data);
    }
    return data;
  }

  setToken(value: string) {
    this.accessToken = value;
  }
}
