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
export declare type InstancedImport = {
    client: BungieClient;
};
/** A client for interacting with the Bungie.net API */
export declare class BungieClient {
    readonly App: typeof AppImport & InstancedImport;
    readonly User: typeof UserImport & InstancedImport;
    readonly Content: typeof ContentImport & InstancedImport;
    readonly Forum: typeof ForumImport & InstancedImport;
    readonly GroupV2: typeof GroupV2Import & InstancedImport;
    readonly Tokens: typeof TokensImport & InstancedImport;
    readonly Destiny2: typeof Destiny2Import & InstancedImport;
    readonly CommunityContent: typeof CommunityContentImport & InstancedImport;
    readonly Trending: typeof TrendingImport & InstancedImport;
    readonly Fireteam: typeof FireteamImport & InstancedImport;
    readonly Social: typeof SocialImport & InstancedImport;
    readonly Core: typeof CoreImport & InstancedImport;
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
