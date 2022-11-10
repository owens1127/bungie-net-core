/**
 * Represents an error sending a request to the Bungie API
 */
import { BungieNetResponse } from "../util/server-response";
export declare class BungieAPIError extends TypeError {
    private ErrorCode;
    private ErrorStatus;
    private MessageData;
    private ThrottleSeconds;
    constructor(response: BungieNetResponse<any>);
}
