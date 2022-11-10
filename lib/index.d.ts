/**
 * @see {@link https://www.bungie.net/en/Application} for more details
 */
export declare function configure(bungie_api_key: string, bungie_client_id: string, bungie_secret: string): void;
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
export * as Tokens from './util/tokens.js';
export * as Schema from './schemas';
export * as Manifest from './manifest';
