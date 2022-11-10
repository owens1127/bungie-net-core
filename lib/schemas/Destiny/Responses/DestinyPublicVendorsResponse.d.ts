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
import { SingleComponentResponseOfDestinyVendorGroupComponent } from '../../SingleComponentResponseOfDestinyVendorGroupComponent';
import { DictionaryComponentResponseOfuint32AndDestinyPublicVendorComponent } from '../../DictionaryComponentResponseOfuint32AndDestinyPublicVendorComponent';
import { DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent } from '../../DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent';
import { DictionaryComponentResponseOfuint32AndPublicDestinyVendorSaleItemSetComponent } from '../../DictionaryComponentResponseOfuint32AndPublicDestinyVendorSaleItemSetComponent';
import { SingleComponentResponseOfDestinyStringVariablesComponent } from '../../SingleComponentResponseOfDestinyStringVariablesComponent';
/**
 * A response containing all valid components for the public Vendors endpoint.
 *
 * It is a decisively smaller subset of data compared to what we can get when we
 * know the specific user making the request.
 *
 * If you want any of the other data - item details, whether or not you can buy it,
 * etc... you'll have to call in the context of a character. I know, sad but true.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyPublicVendorsResponse}
*/
export interface DestinyPublicVendorsResponse {
    /**
     * For Vendors being returned, this will give you the information you need to group
     * them and order them in the same way that the Bungie Companion app performs
     * grouping. It will automatically be returned if you request the Vendors component.
     *
     * COMPONENT TYPE: Vendors
    */
    readonly vendorGroups: SingleComponentResponseOfDestinyVendorGroupComponent;
    /**
     * The base properties of the vendor. These are keyed by the Vendor Hash, so you
     * will get one Vendor Component per vendor returned.
     *
     * COMPONENT TYPE: Vendors
    */
    readonly vendors: DictionaryComponentResponseOfuint32AndDestinyPublicVendorComponent;
    /**
     * Categories that the vendor has available, and references to the sales therein.
     * These are keyed by the Vendor Hash, so you will get one Categories Component per
     * vendor returned.
     *
     * COMPONENT TYPE: VendorCategories
    */
    readonly categories: DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent;
    /**
     * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by
     * the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
     *
     * Note that within the Sale Item Set component, the sales are themselves keyed by
     * the vendorSaleIndex, so you can relate it to the corrent sale item definition
     * within the Vendor's definition.
     *
     * COMPONENT TYPE: VendorSales
    */
    readonly sales: DictionaryComponentResponseOfuint32AndPublicDestinyVendorSaleItemSetComponent;
    /**
     * A set of string variable values by hash for a public vendors context.
     *
     * COMPONENT TYPE: StringVariables
    */
    readonly stringVariables: SingleComponentResponseOfDestinyStringVariablesComponent;
}
