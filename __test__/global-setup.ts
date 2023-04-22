import * as dotenv from 'dotenv';
import { getAccessTokenFromAuthCode, getAccessTokenFromRefreshToken } from '../src/auth/tokens';
import { BungieClient, generateOAuthURL } from '../src';
import { BungieNetResponse } from '../src/interfaces/server-response';

export const client = new BungieClient();

const globalSetup = async () => {
  dotenv.config();
  const tokens = await getAccessTokenFromRefreshToken(process.env.NEWO_BUNGIE_REFRESH!);
  // @ts-ignore
  client.login(tokens);
  return client;
};

function getLink() {
  console.log(generateOAuthURL({}));
}

function getRefresh(auth: string) {
  getAccessTokenFromRefreshToken(auth).then(console.log);
}

export type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

export interface TestCase<Endpoint extends (...args: any[]) => Promise<BungieNetResponse<any>>> {
  name: string;
  data: Parameters<Endpoint> extends never[] ? null | never[] : Parameters<Endpoint>;
  promise: {
    success?: (res: UnwrapPromise<ReturnType<Endpoint>>) => void;
    failure?: (e: Error) => void;
  };
}

export const constants = {
  gjallarhornHash: 1363886209,
  applicationId: parseInt(process.env.BUNGIE_CLIENT_ID!),
  membershipId: '4611686018488107374',
  characterIdHunter: '2305843009468984093'
};

export default globalSetup;
