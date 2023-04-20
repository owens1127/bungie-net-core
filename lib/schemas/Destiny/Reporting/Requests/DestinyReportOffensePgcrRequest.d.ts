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
/**
 * If you want to report a player causing trouble in a game, this request will let
 * you report that player and the specific PGCR in which the trouble was caused,
 * along with why.
 *
 * Please don't do this just because you dislike the person! I mean, I know people
 * will do it anyways, but can you like take a good walk, or put a curse on them or
 * something? Do me a solid and reconsider.
 *
 * Note that this request object doesn't have the actual PGCR ID nor your Account/
 * Character ID in it. We will infer that information from your authentication
 * information and the PGCR ID that you pass into the URL of the reporting endpoint
 * itself.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Reporting.Requests.DestinyReportOffensePgcrRequest}
*/
export interface DestinyReportOffensePgcrRequest {
    /**
     * So you've decided to report someone instead of cursing them and their
     * descendants. Well, okay then. This is the category or categorie(s) of
     * infractions for which you are reporting the user. These are hash identifiers
     * that map to DestinyReportReasonCategoryDefinition entries. Mapped to
     * DestinyReportReasonCategoryDefinition in the manifest.
    */
    readonly reasonCategoryHashes: number[];
    /**
     * If applicable, provide a more specific reason(s) within the general category of
     * problems provided by the reasonHash. This is also an identifier for a reason.
     * All reasonHashes provided must be children of at least one the
     * reasonCategoryHashes provided.
    */
    readonly reasonHashes: number[];
    /**
     * Within the PGCR provided when calling the Reporting endpoint, this should be the
     * character ID of the user that you thought was violating terms of use. They must
     * exist in the PGCR provided.
    */
    readonly offendingCharacterId: string;
}
