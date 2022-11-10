/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieCredentialType } from './BungieCredentialType';
import { PlatformErrorCodes } from './Exceptions/PlatformErrorCodes';
/** @see {@link https://bungie-net.github.io/#/components/responses/CEDictionaryOfBungieCredentialTypeAndstring} */
export interface CEDictionaryOfBungieCredentialTypeAndstring {
    readonly Response: {
        [key in BungieCredentialType]: string;
    };
    readonly ErrorCode: PlatformErrorCodes;
    readonly ThrottleSeconds: number;
    readonly ErrorStatus: string;
    readonly Message: string;
    readonly MessageData: {
        [key: string]: string;
    };
    readonly DetailedErrorTrace: string;
}
