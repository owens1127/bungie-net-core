import * as dotenv from 'dotenv';
import { getAccessTokenFromRefreshToken } from '../src/auth/tokens';
import { BungieClientProtocol, BungieFetchConfig } from '../src/client';
import { BungieNetResponse } from '../src/interfaces/BungieNetResponse';
import { BungieAPIError } from '../src/errors/BungieAPIError';
import { PlatformErrorCodes } from '../src/models';

export const constants = {
  gjallarhornHash: 1363886209,
  applicationId: parseInt(process.env.BUNGIE_CLIENT_ID!),
  membershipId: '4611686018488107374',
  characterIdHunter: '2305843009468984093'
};

class BungieTestClient implements BungieClientProtocol {
  access_token: undefined | string;
  async fetch<T>(config: BungieFetchConfig): Promise<BungieNetResponse<T>> {
    const apiKey = process.env.BUNGIE_API_KEY!;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey
    };
    if (this.access_token)
      headers['Authorization'] = `Bearer ${this.access_token}`;

    const body = config.body ? JSON.stringify(config.body) : null;

    const url = new URL(config.url);
    if (config.params)
      Object.entries(config.params).forEach(([key, value]) =>
        url.searchParams.set(key, value)
      );

    const payload = {
      method: config.method,
      body,
      headers
    };

    let attempts = 0;
    let err;
    while (attempts < 3) {
      attempts++;
      try {
        const res = await fetch(url, payload);
        const data: BungieNetResponse<T> = await res.json();
        if (data.ErrorCode !== PlatformErrorCodes.Success || !res.ok) {
          throw new BungieAPIError(data);
        }
        return data;
      } catch (e) {
        err = e;
      }
    }
    throw err;
  }

  setToken(value: string) {
    this.access_token = value;
  }
}

export const sharedTestClient = new BungieTestClient();

const globalSetup = async () => {
  dotenv.config();
  const tokens = await getAccessTokenFromRefreshToken(
    process.env.NEWO_BUNGIE_REFRESH!
  );
  sharedTestClient.setToken(tokens.access.value);
};

type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

export type ResponseType<T extends (...args: any) => any> = UnwrapPromise<
  ReturnType<T>
>;

type None = null | never[];
export interface TestCase<
  Endpoint extends (...args: any[]) => Promise<BungieNetResponse<any>>
> {
  name: string;
  data: Parameters<Endpoint> extends [...infer Data, infer _Client]
    ? Data extends never[]
      ? None
      : Data
    : None;
  promise: {
    success?: (res: UnwrapPromise<ReturnType<Endpoint>>) => void;
    failure?: (e: BungieAPIError<ReturnType<Endpoint>>) => void;
  };
}

export default globalSetup;
