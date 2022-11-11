import * as AppImport from '../endpoints/App/index.js';
import * as UserImport from '../endpoints/User/index.js';
import * as ContentImport from '../endpoints/Content/index.js';
import * as ForumImport from '../endpoints/Forum/index.js';
import * as GroupV2Import from '../endpoints/GroupV2/index.js';
import * as TokensImport from '../endpoints/Tokens/index.js';
import * as Destiny2Import from '../endpoints/Destiny2/index.js';
import * as CommunityContentImport from '../endpoints/CommunityContent/index.js';
import * as TrendingImport from '../endpoints/Trending/index.js';
import * as FireteamImport from '../endpoints/Fireteam/index.js';
import * as SocialImport from '../endpoints/Social/index.js';
import * as CoreImport from '../endpoints/Core/index.js';
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
