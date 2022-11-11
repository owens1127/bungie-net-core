function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
export class BungieClient {
  constructor(access_token) {
    _defineProperty(this, "App", void 0);
    _defineProperty(this, "User", void 0);
    _defineProperty(this, "Content", void 0);
    _defineProperty(this, "Forum", void 0);
    _defineProperty(this, "GroupV2", void 0);
    _defineProperty(this, "Tokens", void 0);
    _defineProperty(this, "Destiny2", void 0);
    _defineProperty(this, "CommunityContent", void 0);
    _defineProperty(this, "Trending", void 0);
    _defineProperty(this, "Fireteam", void 0);
    _defineProperty(this, "Social", void 0);
    _defineProperty(this, "Core", void 0);
    _defineProperty(this, "access_token", void 0);
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