import { PlatformErrorCodes } from '../schemas/index.js';

interface ServerResponse {
    ResponseTime: number;
}

/**
 * A general interface for a Bungie API response
 */
export interface BungieNetResponse<R> extends ServerResponse {
    readonly Response: R;
    readonly ErrorCode: PlatformErrorCodes;
    readonly ThrottleSeconds: number;
    readonly ErrorStatus: string;
    readonly Message: string;
    readonly MessageData: { [key: string]: string };
    readonly DetailedErrorTrace: string;
}
