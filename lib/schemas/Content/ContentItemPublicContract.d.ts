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
import { GeneralUser } from '../User/GeneralUser';
import { ContentRepresentation } from './ContentRepresentation';
import { CommentSummary } from './CommentSummary';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Content.ContentItemPublicContract} */
export interface ContentItemPublicContract {
    readonly contentId: string;
    readonly cType: string;
    readonly cmsPath: string;
    readonly creationDate: string;
    readonly modifyDate: string;
    readonly allowComments: boolean;
    readonly hasAgeGate: boolean;
    readonly minimumAge: number;
    readonly ratingImagePath: string;
    readonly author: GeneralUser;
    readonly autoEnglishPropertyFallback: boolean;
    /**
     * Firehose content is really a collection of metadata and "properties", which are
     * the potentially-but-not-strictly localizable data that comprises the meat of
     * whatever content is being shown.
     *
     * As Cole Porter would have crooned, "Anything Goes" with Firehose properties.
     * They are most often strings, but they can theoretically be anything. They are
     * JSON encoded, and could be JSON structures, simple strings, numbers etc... The
     * Content Type of the item (cType) will describe the properties, and thus how they
     * ought to be deserialized.
    */
    readonly properties: {
        [key: string]: object;
    };
    readonly representations: ContentRepresentation[];
    /** NOTE: Tags will always be lower case. */
    readonly tags: string[];
    readonly commentSummary: CommentSummary;
}