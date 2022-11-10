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
import { SingleComponentResponseOfDestinyVendorComponent } from '../../SingleComponentResponseOfDestinyVendorComponent';
import { SingleComponentResponseOfDestinyVendorCategoriesComponent } from '../../SingleComponentResponseOfDestinyVendorCategoriesComponent';
import { DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent } from '../../DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent';
import { DestinyItemComponentSetOfint32 } from '../../DestinyItemComponentSetOfint32';
import { SingleComponentResponseOfDestinyCurrenciesComponent } from '../../SingleComponentResponseOfDestinyCurrenciesComponent';
import { SingleComponentResponseOfDestinyStringVariablesComponent } from '../../SingleComponentResponseOfDestinyStringVariablesComponent';
/**
 * A response containing all of the components for a vendor.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyVendorResponse}
*/
export interface DestinyVendorResponse {
    /**
     * The base properties of the vendor.
     *
     * COMPONENT TYPE: Vendors
    */
    readonly vendor: SingleComponentResponseOfDestinyVendorComponent;
    /**
     * Categories that the vendor has available, and references to the sales therein.
     *
     * COMPONENT TYPE: VendorCategories
    */
    readonly categories: SingleComponentResponseOfDestinyVendorCategoriesComponent;
    /**
     * Sales, keyed by the vendorItemIndex of the item being sold.
     *
     * COMPONENT TYPE: VendorSales
    */
    readonly sales: DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent;
    /**
     * Item components, keyed by the vendorItemIndex of the active sale items.
     *
     * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component
     * types.]
    */
    readonly itemComponents: DestinyItemComponentSetOfint32;
    /**
     * A "lookup" convenience component that can be used to quickly check if the
     * character has access to items that can be used for purchasing.
     *
     * COMPONENT TYPE: CurrencyLookups
    */
    readonly currencyLookups: SingleComponentResponseOfDestinyCurrenciesComponent;
    /**
     * A map of string variable values by hash for this character context.
     *
     * COMPONENT TYPE: StringVariables
    */
    readonly stringVariables: SingleComponentResponseOfDestinyStringVariablesComponent;
}