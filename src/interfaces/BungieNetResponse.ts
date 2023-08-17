import { PlatformErrorCodes } from '../models/Exceptions/PlatformErrorCodes';

/**
 * A general interface for a Bungie API response
 */
export interface BungieNetResponse<R> {
  readonly Response: R;
  readonly ErrorCode: PlatformErrorCodes;
  readonly ThrottleSeconds: number;
  readonly ErrorStatus: string;
  readonly Message: string;
  readonly MessageData: { [key: string]: string };
  readonly DetailedErrorTrace: string;
}
