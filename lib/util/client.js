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
export class BungieClient {
  constructor(access_token) {
    this.access_token = access_token;
    this.App = AppImport;
    this.User = UserImport;
    this.Content = ContentImport;
    this.Forum = ForumImport;
    this.GroupV2 = GroupV2Import;
    this.Tokens = TokensImport;
    this.Destiny2 = Destiny2Import;
    this.CommunityContent = CommunityContentImport;
    this.Trending = TrendingImport;
    this.Fireteam = FireteamImport;
    this.Social = SocialImport;
    this.Core = CoreImport;
    for (const tag in this) {
      for (const property in this[tag]) {
        if (typeof this[tag][property] === 'function') this[tag][property] = this[tag][property].bind(this);
      }
    }
  }
  login(access_token) {
    this.access_token = access_token;
  }

  logout() {
    this.access_token = undefined;
  }
}