import * as TokensImport from './util/tokens';
import * as ManifestImport from './manifest/index';
import * as SchemaImport from './schemas/index';
/**
 * @see {@link https://auth0.com/docs/protocols/state-parameters}
 */
declare type CreateAuthURLOptions = {
    redirectURL?: string;
    state?: string;
};
/**
 * Creates an authentication URL for users to click
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
export declare function generateOAuthURL(options: CreateAuthURLOptions): string;
export { BungieClient } from './util/client';
export declare const Tokens: typeof TokensImport;
export declare const Manifest: typeof ManifestImport;
export declare const Schema: typeof SchemaImport;
