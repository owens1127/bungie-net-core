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
import { GearAssetDataBaseDefinition } from './GearAssetDataBaseDefinition';
import { ImagePyramidEntry } from './ImagePyramidEntry';
/**
 * DestinyManifest is the external-facing contract for just the properties needed
 * by those calling the Destiny Platform.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Config.DestinyManifest}
*/
export interface DestinyManifest {
    readonly version: string;
    readonly mobileAssetContentPath: string;
    readonly mobileGearAssetDataBases: GearAssetDataBaseDefinition[];
    readonly mobileWorldContentPaths: {
        [key: string]: string;
    };
    /**
     * This points to the generated JSON that contains all the Definitions. Each key is
     * a locale. The value is a path to the aggregated world definitions (warning:
     * large file!)
    */
    readonly jsonWorldContentPaths: {
        [key: string]: string;
    };
    /**
     * This points to the generated JSON that contains all the Definitions. Each key is
     * a locale. The value is a dictionary, where the key is a definition type by name,
     * and the value is the path to the file for that definition. WARNING: This is
     * unsafe and subject to change - do not depend on data in these files staying
     * around long-term.
    */
    readonly jsonWorldComponentContentPaths: {
        [key: string]: {
            [key: string]: string;
        };
    };
    readonly mobileClanBannerDatabasePath: string;
    readonly mobileGearCDN: {
        [key: string]: string;
    };
    /**
     * Information about the "Image Pyramid" for Destiny icons. Where possible, we
     * create smaller versions of Destiny icons. These are found as subfolders under
     * the location of the "original/full size" Destiny images, with the same file name
     * and extension as the original image itself. (this lets us avoid sending largely
     * redundant path info with every entity, at the expense of the smaller versions of
     * the image being less discoverable)
    */
    readonly iconImagePyramidInfo: ImagePyramidEntry[];
}