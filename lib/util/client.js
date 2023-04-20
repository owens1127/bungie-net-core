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
    // tslint:disable-next-line
    constructor(access_token) {
        this.access_token = access_token;
        this.App = Object.assign(Object.assign({}, AppImport), { access_token });
        this.User = Object.assign(Object.assign({}, UserImport), { access_token });
        this.Content = Object.assign(Object.assign({}, ContentImport), { access_token });
        this.Forum = Object.assign(Object.assign({}, ForumImport), { access_token });
        this.GroupV2 = Object.assign(Object.assign({}, GroupV2Import), { access_token });
        this.Tokens = Object.assign(Object.assign({}, TokensImport), { access_token });
        this.Destiny2 = Object.assign(Object.assign({}, Destiny2Import), { access_token });
        this.CommunityContent = Object.assign(Object.assign({}, CommunityContentImport), { access_token });
        this.Trending = Object.assign(Object.assign({}, TrendingImport), { access_token });
        this.Fireteam = Object.assign(Object.assign({}, FireteamImport), { access_token });
        this.Social = Object.assign(Object.assign({}, SocialImport), { access_token });
        this.Core = Object.assign(Object.assign({}, CoreImport), { access_token });
    }
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    login(token) {
        this.access_token = token;
    }
    /**
     * Log the Client out.
     */
    logout() {
        this.access_token = undefined;
    }
}
