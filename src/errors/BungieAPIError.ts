/**
 * Represents an error sending a request to the Bungie API
 */
import {BungieNetResponse} from "../util/server-response";
import {PlatformErrorCodes} from "./schemas/Exceptions";

export class BungieAPIError extends TypeError {
    private ErrorCode: PlatformErrorCodes;
    private ErrorStatus: string;
    private MessageData: { [p: string]: string };
    private ThrottleSeconds: number;

    constructor(response: BungieNetResponse<any>) {
        super(response.Message);
        this.name = 'BungieAPIError';
        this.ErrorCode = response.ErrorCode;
        this.ErrorStatus = response.ErrorStatus;
        this.MessageData = response.MessageData;
        this.ThrottleSeconds = response.ThrottleSeconds;
    }

}
