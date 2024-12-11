import { BungieNetResponse } from '../src/interfaces/BungieNetResponse';
import { BungieAPIError, sharedTestClient } from './global-setup';
import * as App from './endpoints/App';
import * as CommunityContent from './endpoints/CommunityContent';
import * as Content from './endpoints/Content';
import * as Core from './endpoints/Core';
import * as Destiny2 from './endpoints/Destiny2';
import * as Fireteam from './endpoints/Fireteam';
import * as Forum from './endpoints/Forum';
import * as GroupV2 from './endpoints/GroupV2';
import * as Social from './endpoints/Social';
import * as Tokens from './endpoints/Tokens';
import * as Trending from './endpoints/Trending';
import { BungieHttpProtocol } from '../src';

const allImports = [
  App,
  CommunityContent,
  Content,
  Core,
  Destiny2,
  Fireteam,
  Forum,
  GroupV2,
  Social,
  Tokens,
  Trending
] as Record<string, EndpointTestSuite>[];

allImports.forEach(imprt => Object.entries(imprt).forEach(([key, suite]) => performTests(key, suite)));

type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

type ResponseType<T extends (...args: any) => any> = UnwrapPromise<ReturnType<T>>;

export type EndpointTestSuite<
  E extends (http: BungieHttpProtocol, ...args: any[]) => Promise<BungieNetResponse<any>> = (
    http: BungieHttpProtocol,
    ...args: any[]
  ) => Promise<BungieNetResponse<any>>
> = {
  endpoint: E;
  cases: {
    name: string;
    data: Parameters<E> extends [infer _Client, ...infer Data] ? (Data extends never[] ? None : Data) : None;
    promise: {
      success?: (res: UnwrapPromise<ReturnType<E>>) => void;
      failure?: (e: BungieAPIError<ReturnType<E>>) => void;
    };
  }[];
};
type None = null | never[];

function performTests(key: string, { endpoint, cases }: EndpointTestSuite) {
  describe(key, () => {
    cases.map(({ name, data, promise: { failure, success } }) =>
      describe(name, () => {
        let res: ResponseType<typeof endpoint> | null = null;
        let err: unknown | null = null;

        beforeAll(async () => {
          try {
            res = await endpoint(sharedTestClient.http, data?.[0], data?.[1]);
          } catch (e) {
            err = e;
          }
        });

        if (success) {
          it('is expected to succeed', () => {
            expect(res).not.toBeNull();
          });
          it('is a valid response', () => {
            expect(res).toHaveProperty('ErrorCode');
            expect(res!.ErrorCode).toEqual(1);
            expect(res).toHaveProperty('Response');
          });
          test('it returns the correct data', () => success!(res!));
        }

        if (failure) {
          it('is expected to error', () => {
            expect(err).not.toBeNull();
          });
          it('is a Bungie error', () => {
            expect(err).toHaveProperty('ErrorCode');
          });
          test('it throws the correct error', () =>
            failure!(new BungieAPIError<ReturnType<typeof endpoint>>(err as any)));
        }
      })
    );
  });
}
