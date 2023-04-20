"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotConfiguredError = void 0;
var credentials_1 = require("../util/credentials");
var NotConfiguredError = /** @class */ (function (_super) {
    __extends(NotConfiguredError, _super);
    function NotConfiguredError() {
        var _this = _super.call(this) || this;
        var apiKey = (0, credentials_1._credentials)().BUNGIE_API_KEY;
        var clientId = (0, credentials_1._credentials)().BUNGIE_CLIENT_ID;
        var secret = (0, credentials_1._credentials)().BUNGIE_CLIENT_SECRET;
        _this.message = "Please configure your API Key, Client ID, and Client Secret as environment variables: 'BUNGIE_API_KEY, BUNGIE_CLIENT_ID, 'BUNGIE_API_KEY, BUNGIE_CLIENT_SECRET";
        _this.BUNGIE_API_KEY = apiKey ? apiKey.substring(0, 5) + '...' : '';
        _this.BUNGIE_CLIENT_ID = clientId;
        _this.BUNGIE_CLIENT_SECRET = secret ? secret.substring(0, 5) + '...' : '';
        return _this;
    }
    return NotConfiguredError;
}(Error));
exports.NotConfiguredError = NotConfiguredError;
