/** A client for interacting with the Bungie.net API */
module.exports = class BungieClient {
    constructor(access_token) {
      if (access_token) this.login(access_token);
      this.App = require('./endpoints/App/index.js');
      this.User = require('./endpoints/User/index.js');
      this.Content = require('./endpoints/Content/index.js');
      this.Forum = require('./endpoints/Forum/index.js');
      this.GroupV2 = require('./endpoints/GroupV2/index.js');
      this.Tokens = require('./endpoints/Tokens/index.js');
      this.Destiny2 = require('./endpoints/Destiny2/index.js');
      this.CommunityContent = require('./endpoints/CommunityContent/index.js');
      this.Trending = require('./endpoints/Trending/index.js');
      this.Fireteam = require('./endpoints/Fireteam/index.js');
      this.Social = require('./endpoints/Social/index.js');
      this.Core = require('./endpoints/Core/index.js');
      // bind 'this' to all API endpoint functions
      for (const tag in this) {
          for (const property in this[tag]) {
              if (typeof this[tag][property] === 'function') this[tag][property] = this[tag][property].bind(this);
          }
      }
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
        this.access_token = null;
    }
}