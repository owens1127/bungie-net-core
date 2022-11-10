import * as App from '../endpoints/App';
import * as User from '../endpoints/User';
import * as Content from '../endpoints/Content';
import * as Forum from '../endpoints/Forum';
import * as GroupV2 from '../endpoints/GroupV2';
import * as Tokens from '../endpoints/Tokens';
import * as Destiny2 from '../endpoints/Destiny2';
import * as CommunityContent from '../endpoints/CommunityContent';
import * as Trending from '../endpoints/Trending';
import * as Fireteam from '../endpoints/Fireteam';
import * as Social from '../endpoints/Social';
import * as Core from '../endpoints/Core';
export class BungieClient {
  constructor(access_token) {
    this.access_token = access_token;
    this.App = App;
    this.User = User;
    this.Content = Content;
    this.Forum = Forum;
    this.GroupV2 = GroupV2;
    this.Tokens = Tokens;
    this.Destiny2 = Destiny2;
    this.CommunityContent = CommunityContent;
    this.Trending = Trending;
    this.Fireteam = Fireteam;
    this.Social = Social;
    this.Core = Core;
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