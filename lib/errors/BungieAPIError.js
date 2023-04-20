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
exports.BungieAPIError = void 0;
var BungieAPIError = /** @class */ (function (_super) {
    __extends(BungieAPIError, _super);
    function BungieAPIError(response) {
        var _this = _super.call(this, response.Message) || this;
        _this.DetailedErrorTrace = response.DetailedErrorTrace;
        _this.ErrorCode = response.ErrorCode;
        _this.ErrorStatus = response.ErrorStatus;
        _this.MessageData = response.MessageData;
        _this.Message = response.Message;
        _this.MessageData = response.MessageData;
        _this.Response = response.Response;
        _this.ThrottleSeconds = response.ThrottleSeconds;
        _this.ResponseTime = response.ResponseTime;
        return _this;
    }
    return BungieAPIError;
}(Error));
exports.BungieAPIError = BungieAPIError;
