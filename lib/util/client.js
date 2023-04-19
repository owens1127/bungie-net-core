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
export class BungieClient {
    App;
    User;
    Content;
    Forum;
    GroupV2;
    Tokens;
    Destiny2;
    CommunityContent;
    Trending;
    Fireteam;
    Social;
    Core;
    access_token;
    constructor(access_token) {
        this.access_token = access_token;
        this.App = { ...AppImport, client: this };
        this.User = { ...UserImport, client: this };
        this.Content = { ...ContentImport, client: this };
        this.Forum = { ...ForumImport, client: this };
        this.GroupV2 = { ...GroupV2Import, client: this };
        this.Tokens = { ...TokensImport, client: this };
        this.Destiny2 = { ...Destiny2Import, client: this };
        this.CommunityContent = { ...CommunityContentImport, client: this };
        this.Trending = { ...TrendingImport, client: this };
        this.Fireteam = { ...FireteamImport, client: this };
        this.Social = { ...SocialImport, client: this };
        this.Core = { ...CoreImport, client: this };
    }
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    login(access_token) {
        this.access_token = access_token;
    }
    /**
     * Log the Client out.
     */
    logout() {
        this.access_token = undefined;
    }
}
