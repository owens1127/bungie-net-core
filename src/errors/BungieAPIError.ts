/**
 * Represents an error sending a request to the Bungie API
 */
import { PlatformErrorCodes } from '../schemas/index.js';
import { BungieNetResponse } from '../util/server-response.js';

export class BungieAPIError<T> extends Error implements BungieNetResponse<T> {
  readonly DetailedErrorTrace: string;
  readonly ErrorCode: PlatformErrorCodes;
  readonly ErrorStatus: string;
  readonly Message: string;
  readonly MessageData: { [p: string]: string };
  readonly Response: T;
  readonly ThrottleSeconds: number;
  readonly ResponseTime: number;

  constructor(response: BungieNetResponse<T>) {
    super(response.Message);
    this.DetailedErrorTrace = response.DetailedErrorTrace;
    this.ErrorCode = response.ErrorCode;
    this.ErrorStatus = response.ErrorStatus;
    this.MessageData = response.MessageData;
    this.Message = response.Message;
    this.MessageData = response.MessageData;
    this.Response = response.Response;
    this.ThrottleSeconds = response.ThrottleSeconds;
    this.ResponseTime = response.ResponseTime;
  }
}
