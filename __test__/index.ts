import { BungieNetResponse } from '../src/util/server-response';
import { BungieClient } from '../src';

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
  membershipId: '4611686018488107374'
};

export const client = new BungieClient();
