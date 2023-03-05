import { BungieNetResponse } from '../lib-ts/util/server-response';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export interface TestCase<Endpoint extends (params?, body?) => Promise<BungieNetResponse<any>>> {
  name: string
  params?: Endpoint extends (params: infer P) => any ? P : never;
  body?: Endpoint extends (body: infer P) => any ? P : never;
  promise: {
    success: (res: UnwrapPromise<ReturnType<Endpoint>>) => void
    failure: (e: Error) => void
  }
}

export const constants = {
  gjallarhornHash: 1363886209,
  applicationId: parseInt(process.env.BUNGIE_CLIENT_ID),
  membershipId: "4611686018488107374"
}