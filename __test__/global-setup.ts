import * as dotenv from 'dotenv';
import { BungieClientProtocol, BungieFetchConfig } from '../src';
import { BungieNetResponse } from '../src/interfaces/BungieNetResponse';
import { PlatformErrorCodes } from '../src/enums/Exceptions/PlatformErrorCodes';
import { createOAuthURL, refreshAuthorization } from '../src/auth';

export const constants = {
  gjallarhornHash: 1363886209,
  applicationId: parseInt(process.env.BUNGIE_CLIENT_ID!),
  membershipId: '4611686018488107374',
  characterIdHunter: '2305843009468984093'
};

class BungieTestClient implements BungieClientProtocol {
  access_token: undefined | string;
  async fetch<T>(config: BungieFetchConfig): Promise<T> {
    const apiKey = process.env.BUNGIE_API_KEY!;

    const headers: Record<string, string> = {
      ...config.headers,
      'X-API-KEY': apiKey
    };
    if (this.access_token) {
      headers['Authorization'] = `Bearer ${this.access_token}`;
    }

    const payload = {
      method: config.method,
      body: config.body,
      headers
    };

    let attempts = 0;
    let err;
    while (attempts < 3) {
      attempts++;
      try {
        const res = await fetch(config.url, payload);
        const data = await res.json();
        if (data.ErrorCode) {
          if (data.ErrorCode !== PlatformErrorCodes.Success || !res.ok) {
            throw new BungieAPIError(data);
          }
        } else {
          if (!res.ok) {
            err = data;
            break;
          }
        }
        return data as T;
      } catch (e) {
        err = e;
      }
    }
    throw err;
  }

  async reauth() {
    await refreshAuthorization(
      process.env.BUNGIE_REFRESH!,
      {
        client_id: process.env.BUNGIE_CLIENT_ID!,
        client_secret: process.env.BUNGIE_CLIENT_SECRET!
      },
      this
    )
      .then(tokens => {
        this.access_token = tokens.access_token;
      })
      .catch(e => {
        console.error(e);
        console.log(
          '\nAuthorization Link: ' +
            createOAuthURL({
              client_id: process.env.BUNGIE_CLIENT_ID!
            }).toString()
        );
        process.exit(1);
      });
  }
}

export const sharedTestClient = new BungieTestClient();

const globalSetup = async () => {
  dotenv.config();
  await sharedTestClient.reauth();
};

export default globalSetup;

export class BungieAPIError<T> extends Error implements BungieNetResponse<T> {
  readonly DetailedErrorTrace: string;
  readonly ErrorCode: PlatformErrorCodes;
  readonly ErrorStatus: string;
  readonly Message: string;
  readonly MessageData: { [p: string]: string };
  readonly Response: T;
  readonly ThrottleSeconds: number;

  constructor(response: BungieNetResponse<T>) {
    super();
    this.name = 'BungieAPIError';
    this.DetailedErrorTrace = response.DetailedErrorTrace;
    this.ErrorCode = response.ErrorCode;
    this.ErrorStatus = response.ErrorStatus;
    this.MessageData = response.MessageData;
    this.Message = response.Message;
    this.MessageData = response.MessageData;
    this.Response = response.Response;
    this.ThrottleSeconds = response.ThrottleSeconds;
  }

  get message(): string {
    return this.Message;
  }
}
