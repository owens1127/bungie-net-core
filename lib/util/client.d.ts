import * as AppImport from '../endpoints/App';
import * as UserImport from '../endpoints/User';
import * as ContentImport from '../endpoints/Content';
import * as ForumImport from '../endpoints/Forum';
import * as GroupV2Import from '../endpoints/GroupV2';
import * as TokensImport from '../endpoints/Tokens';
import * as Destiny2Import from '../endpoints/Destiny2';
import * as CommunityContentImport from '../endpoints/CommunityContent';
import * as TrendingImport from '../endpoints/Trending';
import * as FireteamImport from '../endpoints/Fireteam';
import * as SocialImport from '../endpoints/Social';
import * as CoreImport from '../endpoints/Core';
export type AccessTokenObject = {
    access_token?: string;
};
/** A client for interacting with the Bungie.net API */
export declare class BungieClient {
    readonly App: typeof AppImport & AccessTokenObject;
    readonly User: typeof UserImport & AccessTokenObject;
    readonly Content: typeof ContentImport & AccessTokenObject;
    readonly Forum: typeof ForumImport & AccessTokenObject;
    readonly GroupV2: typeof GroupV2Import & AccessTokenObject;
    readonly Tokens: typeof TokensImport & AccessTokenObject;
    readonly Destiny2: typeof Destiny2Import & AccessTokenObject;
    readonly CommunityContent: typeof CommunityContentImport & AccessTokenObject;
    readonly Trending: typeof TrendingImport & AccessTokenObject;
    readonly Fireteam: typeof FireteamImport & AccessTokenObject;
    readonly Social: typeof SocialImport & AccessTokenObject;
    readonly Core: typeof CoreImport & AccessTokenObject;
    access_token?: string;
    constructor(access_token?: string);
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    login(token: string): void;
    /**
     * Log the Client out.
     */
    logout(): void;
}
