"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BungieClient = void 0;
var AppImport = __importStar(require("../endpoints/App"));
var UserImport = __importStar(require("../endpoints/User"));
var ContentImport = __importStar(require("../endpoints/Content"));
var ForumImport = __importStar(require("../endpoints/Forum"));
var GroupV2Import = __importStar(require("../endpoints/GroupV2"));
var TokensImport = __importStar(require("../endpoints/Tokens"));
var Destiny2Import = __importStar(require("../endpoints/Destiny2"));
var CommunityContentImport = __importStar(require("../endpoints/CommunityContent"));
var TrendingImport = __importStar(require("../endpoints/Trending"));
var FireteamImport = __importStar(require("../endpoints/Fireteam"));
var SocialImport = __importStar(require("../endpoints/Social"));
var CoreImport = __importStar(require("../endpoints/Core"));
/** A client for interacting with the Bungie.net API */
var BungieClient = /** @class */ (function () {
    // tslint:disable-next-line
    function BungieClient(access_token) {
        this.access_token = access_token;
        this.App = __assign(__assign({}, AppImport), { access_token: access_token });
        this.User = __assign(__assign({}, UserImport), { access_token: access_token });
        this.Content = __assign(__assign({}, ContentImport), { access_token: access_token });
        this.Forum = __assign(__assign({}, ForumImport), { access_token: access_token });
        this.GroupV2 = __assign(__assign({}, GroupV2Import), { access_token: access_token });
        this.Tokens = __assign(__assign({}, TokensImport), { access_token: access_token });
        this.Destiny2 = __assign(__assign({}, Destiny2Import), { access_token: access_token });
        this.CommunityContent = __assign(__assign({}, CommunityContentImport), { access_token: access_token });
        this.Trending = __assign(__assign({}, TrendingImport), { access_token: access_token });
        this.Fireteam = __assign(__assign({}, FireteamImport), { access_token: access_token });
        this.Social = __assign(__assign({}, SocialImport), { access_token: access_token });
        this.Core = __assign(__assign({}, CoreImport), { access_token: access_token });
    }
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    BungieClient.prototype.login = function (token) {
        this.access_token = token;
    };
    /**
     * Log the Client out.
     */
    BungieClient.prototype.logout = function () {
        this.access_token = undefined;
    };
    return BungieClient;
}());
exports.BungieClient = BungieClient;
