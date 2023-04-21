"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BungieClient = void 0;
var AppImport = _interopRequireWildcard(require("../endpoints/App"));
var UserImport = _interopRequireWildcard(require("../endpoints/User"));
var ContentImport = _interopRequireWildcard(require("../endpoints/Content"));
var ForumImport = _interopRequireWildcard(require("../endpoints/Forum"));
var GroupV2Import = _interopRequireWildcard(require("../endpoints/GroupV2"));
var TokensImport = _interopRequireWildcard(require("../endpoints/Tokens"));
var Destiny2Import = _interopRequireWildcard(require("../endpoints/Destiny2"));
var CommunityContentImport = _interopRequireWildcard(require("../endpoints/CommunityContent"));
var TrendingImport = _interopRequireWildcard(require("../endpoints/Trending"));
var FireteamImport = _interopRequireWildcard(require("../endpoints/Fireteam"));
var SocialImport = _interopRequireWildcard(require("../endpoints/Social"));
var CoreImport = _interopRequireWildcard(require("../endpoints/Core"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class BungieClient {
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
    this.App = _objectSpread(_objectSpread({}, AppImport), {}, {
      access_token
    });
    this.User = _objectSpread(_objectSpread({}, UserImport), {}, {
      access_token
    });
    this.Content = _objectSpread(_objectSpread({}, ContentImport), {}, {
      access_token
    });
    this.Forum = _objectSpread(_objectSpread({}, ForumImport), {}, {
      access_token
    });
    this.GroupV2 = _objectSpread(_objectSpread({}, GroupV2Import), {}, {
      access_token
    });
    this.Tokens = _objectSpread(_objectSpread({}, TokensImport), {}, {
      access_token
    });
    this.Destiny2 = _objectSpread(_objectSpread({}, Destiny2Import), {}, {
      access_token
    });
    this.CommunityContent = _objectSpread(_objectSpread({}, CommunityContentImport), {}, {
      access_token
    });
    this.Trending = _objectSpread(_objectSpread({}, TrendingImport), {}, {
      access_token
    });
    this.Fireteam = _objectSpread(_objectSpread({}, FireteamImport), {}, {
      access_token
    });
    this.Social = _objectSpread(_objectSpread({}, SocialImport), {}, {
      access_token
    });
    this.Core = _objectSpread(_objectSpread({}, CoreImport), {}, {
      access_token
    });
  }
  login(token) {
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
exports.BungieClient = BungieClient;