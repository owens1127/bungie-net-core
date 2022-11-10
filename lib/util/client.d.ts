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
/** A client for interacting with the Bungie.net API */
export declare class BungieClient {
    readonly App: typeof AppImport;
    readonly User: typeof UserImport;
    readonly Content: typeof ContentImport;
    readonly Forum: typeof ForumImport;
    readonly GroupV2: typeof GroupV2Import;
    readonly Tokens: typeof TokensImport;
    readonly Destiny2: typeof Destiny2Import;
    readonly CommunityContent: typeof CommunityContentImport;
    readonly Trending: typeof TrendingImport;
    readonly Fireteam: typeof FireteamImport;
    readonly Social: typeof SocialImport;
    readonly Core: typeof CoreImport;
    access_token?: string;
    constructor(access_token?: string);
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    login(access_token: string): void;
    /**
     * Log the Client out.
     */
    logout(): void;
}
