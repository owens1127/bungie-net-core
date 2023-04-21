/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { ComponentData } from '../../../generic/ComponentTypes';
import { DestinyComponentType } from '../DestinyComponentType';
import { SingleComponentResponse } from '../../../generic/SingleComponentResponse';
import { ConditionalComponent } from '../../../generic/ComponentTypes';
import { DestinyVendorGroupComponent } from '../Components/Vendors/DestinyVendorGroupComponent';
import { DictionaryComponentResponse } from '../../../generic/DictionaryComponentResponse';
import { DestinyPublicVendorComponent } from '../Components/Vendors/DestinyPublicVendorComponent';
import { DestinyVendorCategoriesComponent } from '../Entities/Vendors/DestinyVendorCategoriesComponent';
import { PublicDestinyVendorSaleItemSetComponent } from './PublicDestinyVendorSaleItemSetComponent';
import { DestinyStringVariablesComponent } from '../Components/StringVariables/DestinyStringVariablesComponent';
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
export interface DestinyPublicVendorsResponse<T extends DestinyComponentType[]> extends ComponentData {
    /**
     * For Vendors being returned, this will give you the information you need to group
     * them and order them in the same way that the Bungie Companion app performs
     * grouping. It will automatically be returned if you request the Vendors component.
     *
     * COMPONENT TYPE: Vendors
    */
    readonly vendorGroups: ConditionalComponent<T, DestinyComponentType.Vendors, SingleComponentResponse<DestinyVendorGroupComponent>>;
    /**
     * The base properties of the vendor. These are keyed by the Vendor Hash, so you
     * will get one Vendor Component per vendor returned.
     *
     * COMPONENT TYPE: Vendors
    */
    readonly vendors: ConditionalComponent<T, DestinyComponentType.Vendors, DictionaryComponentResponse<string, DestinyPublicVendorComponent>>;
    /**
     * Categories that the vendor has available, and references to the sales therein.
     * These are keyed by the Vendor Hash, so you will get one Categories Component per
     * vendor returned.
     *
     * COMPONENT TYPE: VendorCategories
    */
    readonly categories: ConditionalComponent<T, DestinyComponentType.VendorCategories, DictionaryComponentResponse<string, DestinyVendorCategoriesComponent>>;
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
    readonly sales: ConditionalComponent<T, DestinyComponentType.VendorSales, DictionaryComponentResponse<string, PublicDestinyVendorSaleItemSetComponent>>;
    /**
     * A set of string variable values by hash for a public vendors context.
     *
     * COMPONENT TYPE: StringVariables
    */
    readonly stringVariables: ConditionalComponent<T, DestinyComponentType.StringVariables, SingleComponentResponse<DestinyStringVariablesComponent>>;
}
