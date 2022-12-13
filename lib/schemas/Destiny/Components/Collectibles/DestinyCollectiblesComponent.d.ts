/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { DestinyCollectibleComponent } from './DestinyCollectibleComponent';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Collectibles.DestinyCollectiblesComponent} */
export interface DestinyCollectiblesComponent {
    /** Mapped to DestinyCollectibleDefinition in the manifest. */
    readonly collectibles: {
        [key: number]: DestinyCollectibleComponent;
    };
    /**
     * The hash for the root presentation node definition of Collection categories.
     * Mapped to DestinyPresentationNodeDefinition in the manifest.
    */
    readonly collectionCategoriesRootNodeHash: number;
    /**
     * The hash for the root presentation node definition of Collection Badges. Mapped
     * to DestinyPresentationNodeDefinition in the manifest.
    */
    readonly collectionBadgesRootNodeHash: number;
}
