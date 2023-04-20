/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.4
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyGender } from '../../DestinyGender';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Records.DestinyRecordTitleBlock} */
export interface DestinyRecordTitleBlock {
    readonly hasTitle: boolean;
    readonly titlesByGender: {
        [key in DestinyGender]: string;
    };
    /**
     * For those who prefer to use the definitions. Mapped to DestinyGenderDefinition
     * in the manifest.
    */
    readonly titlesByGenderHash: {
        [key: number]: string;
    };
    /** Mapped to DestinyRecordDefinition in the manifest. */
    readonly gildingTrackingRecordHash?: number;
}
