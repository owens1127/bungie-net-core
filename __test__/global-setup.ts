import * as dotenv from 'dotenv';
import { BungieClientProtocol, BungieFetchConfig } from '../src';
import { BungieNetResponse } from '../src/interfaces/BungieNetResponse';
import { PlatformErrorCodes } from '../src/enums/Exceptions/PlatformErrorCodes';
import { authorize, createOAuthURL, refreshAuthorization } from '../src/auth';

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

  async auth(code: string) {
    await authorize(
      code,
      {
        client_id: process.env.BUNGIE_CLIENT_ID!,
        client_secret: process.env.BUNGIE_CLIENT_SECRET!
      },
      this
    )
      .then(tokens => {
        this.access_token = tokens.access_token;
        process.env.BUNGIE_REFRESH_TOKEN = tokens.refresh_token;
        console.log('Refresh Token:', tokens.refresh_token);
        console.log('Refresh Expires:', new Date(Date.now() + tokens.refresh_expires_in * 1000));
      })
      .catch(e => {
        if (process.env.BUNGIE_REFRESH_TOKEN) {
          console.warn(
            'Failed to authenticate with authorization code. Attempting to reauthorize with refresh token...'
          );
          this.reauth(process.env.BUNGIE_REFRESH_TOKEN);
        } else {
          this.catchAuthError(e);
        }
      });
  }

  async reauth(token: string) {
    await refreshAuthorization(
      token,
      {
        client_id: process.env.BUNGIE_CLIENT_ID!,
        client_secret: process.env.BUNGIE_CLIENT_SECRET!
      },
      this
    )
      .then(tokens => {
        this.access_token = tokens.access_token;
        console.log('New Refresh Token:', tokens.refresh_token);
        console.log('Refresh Expires:', new Date(Date.now() + tokens.refresh_expires_in * 1000));
      })
      .catch(this.catchAuthError);
  }

  private catchAuthError(e: unknown) {
    console.error(e);
    console.log(
      '\nAuthorization Link: ' +
        createOAuthURL({
          client_id: process.env.BUNGIE_CLIENT_ID!
        }).toString()
    );
    console.log(
      'Please visit the link above to reauthorize the application, and then add the authorization code as the environment variable BUNGIE_AUTH_CODE before re-running',
      `npm run test`
    );
    process.exit(1);
  }
}

export const sharedTestClient = new BungieTestClient();

const globalSetup = async () => {
  dotenv.config();
  if (process.env.BUNGIE_AUTH_CODE) {
    await sharedTestClient.auth(process.env.BUNGIE_AUTH_CODE);
  } else if (process.env.BUNGIE_REFRESH_TOKEN) {
    await sharedTestClient.reauth(process.env.BUNGIE_REFRESH_TOKEN);
  } else {
    console.log(
      "Unable to authenticate with Bungie's API. Please set the environment variable BUNGIE_AUTH_CODE to the authorization code received from the OAuth flow, or BUNGIE_REFRESH_TOKEN to the refresh token."
    );
    process.exit(1);
  }
};

export default globalSetup;

export class BungieAPIError<T> extends Error implements BungieNetResponse<T> {
  readonly DetailedErrorTrace: string;
  readonly ErrorCode: (typeof PlatformErrorCodes)[keyof typeof PlatformErrorCodes];
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
