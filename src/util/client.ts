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
export type AccessTokenObject = { access_token?: string };
/** A client for interacting with the Bungie.net API */
export class BungieClient {
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
  // tslint:disable-next-line
  public access_token?: string;
  // tslint:disable-next-line
  constructor(access_token?: string) {
    this.access_token = access_token;
    this.App = { ...AppImport, access_token };
    this.User = { ...UserImport, access_token };
    this.Content = { ...ContentImport, access_token };
    this.Forum = { ...ForumImport, access_token };
    this.GroupV2 = { ...GroupV2Import, access_token };
    this.Tokens = { ...TokensImport, access_token };
    this.Destiny2 = { ...Destiny2Import, access_token };
    this.CommunityContent = { ...CommunityContentImport, access_token };
    this.Trending = { ...TrendingImport, access_token };
    this.Fireteam = { ...FireteamImport, access_token };
    this.Social = { ...SocialImport, access_token };
    this.Core = { ...CoreImport, access_token };
  }

  /**
   * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
   */
  login(token: string) {
    this.access_token = token;
    this.App.access_token = token;
    this.User.access_token = token;
    this.Content.access_token = token;
    this.Forum.access_token = token;
    this.GroupV2.access_token = token;
    this.Tokens.access_token = token;
    this.Destiny2.access_token = token;
    this.CommunityContent.access_token = token;
    this.Trending.access_token = token;
    this.Fireteam.access_token = token;
    this.Social.access_token = token;
    this.Core.access_token = token;
  }

  /**
   * Log the Client out.
   */
  logout() {
    this.access_token = undefined;
    this.App.access_token = undefined;
    this.User.access_token = undefined;
    this.Content.access_token = undefined;
    this.Forum.access_token = undefined;
    this.GroupV2.access_token = undefined;
    this.Tokens.access_token = undefined;
    this.Destiny2.access_token = undefined;
    this.CommunityContent.access_token = undefined;
    this.Trending.access_token = undefined;
    this.Fireteam.access_token = undefined;
    this.Social.access_token = undefined;
    this.Core.access_token = undefined;
  }
}
