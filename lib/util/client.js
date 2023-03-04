function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                  _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                      target,
                      key,
                      Object.getOwnPropertyDescriptor(source, key)
                  );
              });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
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
        _defineProperty(this, 'App', void 0);
        _defineProperty(this, 'User', void 0);
        _defineProperty(this, 'Content', void 0);
        _defineProperty(this, 'Forum', void 0);
        _defineProperty(this, 'GroupV2', void 0);
        _defineProperty(this, 'Tokens', void 0);
        _defineProperty(this, 'Destiny2', void 0);
        _defineProperty(this, 'CommunityContent', void 0);
        _defineProperty(this, 'Trending', void 0);
        _defineProperty(this, 'Fireteam', void 0);
        _defineProperty(this, 'Social', void 0);
        _defineProperty(this, 'Core', void 0);
        _defineProperty(this, 'access_token', void 0);
        this.access_token = access_token;
        this.App = _objectSpread(
            _objectSpread({}, AppImport),
            {},
            {
                client: this
            }
        );
        this.User = _objectSpread(
            _objectSpread({}, UserImport),
            {},
            {
                client: this
            }
        );
        this.Content = _objectSpread(
            _objectSpread({}, ContentImport),
            {},
            {
                client: this
            }
        );
        this.Forum = _objectSpread(
            _objectSpread({}, ForumImport),
            {},
            {
                client: this
            }
        );
        this.GroupV2 = _objectSpread(
            _objectSpread({}, GroupV2Import),
            {},
            {
                client: this
            }
        );
        this.Tokens = _objectSpread(
            _objectSpread({}, TokensImport),
            {},
            {
                client: this
            }
        );
        this.Destiny2 = _objectSpread(
            _objectSpread({}, Destiny2Import),
            {},
            {
                client: this
            }
        );
        this.CommunityContent = _objectSpread(
            _objectSpread({}, CommunityContentImport),
            {},
            {
                client: this
            }
        );
        this.Trending = _objectSpread(
            _objectSpread({}, TrendingImport),
            {},
            {
                client: this
            }
        );
        this.Fireteam = _objectSpread(
            _objectSpread({}, FireteamImport),
            {},
            {
                client: this
            }
        );
        this.Social = _objectSpread(
            _objectSpread({}, SocialImport),
            {},
            {
                client: this
            }
        );
        this.Core = _objectSpread(
            _objectSpread({}, CoreImport),
            {},
            {
                client: this
            }
        );
    }

    login(access_token) {
        this.access_token = access_token;
    }

    logout() {
        this.access_token = undefined;
    }
}
