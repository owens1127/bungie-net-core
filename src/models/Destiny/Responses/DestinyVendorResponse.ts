/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { DestinyComponentType } from '../DestinyComponentType';
import { SingleComponentResponse } from '../../../interfaces/SingleComponentResponse';
import { DestinyVendorComponent } from '../Entities/Vendors/DestinyVendorComponent';
import { DestinyVendorCategoriesComponent } from '../Entities/Vendors/DestinyVendorCategoriesComponent';
import { DictionaryComponentResponse } from '../../../interfaces/DictionaryComponentResponse';
import { DestinyVendorSaleItemComponent } from '../Entities/Vendors/DestinyVendorSaleItemComponent';
import { DestinyVendorItemComponentSet } from '../../../interfaces/DestinyVendorItemComponentSet';
import { DestinyCurrenciesComponent } from '../Components/Inventory/DestinyCurrenciesComponent';
import { DestinyStringVariablesComponent } from '../Components/StringVariables/DestinyStringVariablesComponent';

/**
 * A response containing all of the components for a vendor.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyVendorResponse}
 */

export interface DestinyVendorResponse<T extends readonly DestinyComponentType[] = DestinyComponentType[]> {
  /**
   * The base properties of the vendor.
   *
   * COMPONENT TYPE: Vendors
   */
  readonly vendor: SingleComponentResponse<DestinyVendorComponent, 'Vendors', T>;
  /**
   * Categories that the vendor has available, and references to the sales therein.
   *
   * COMPONENT TYPE: VendorCategories
   */
  readonly categories: SingleComponentResponse<DestinyVendorCategoriesComponent, 'VendorCategories', T>;
  /**
   * Sales, keyed by the vendorItemIndex of the item being sold.
   *
   * COMPONENT TYPE: VendorSales
   */
  readonly sales: DictionaryComponentResponse<number, DestinyVendorSaleItemComponent, 'VendorSales', T>;
  /**
   * Item components, keyed by the vendorItemIndex of the active sale items.
   *
   * COMPONENT TYPE: [See inside the DestinyVendorItemComponentSet contract for
   * component types.]
   */
  readonly itemComponents: DestinyVendorItemComponentSet<T>;
  /**
   * A "lookup" convenience component that can be used to quickly check if the
   * character has access to items that can be used for purchasing.
   *
   * COMPONENT TYPE: CurrencyLookups
   */
  readonly currencyLookups: SingleComponentResponse<DestinyCurrenciesComponent, 'CurrencyLookups', T>;
  /**
   * A map of string variable values by hash for this character context.
   *
   * COMPONENT TYPE: StringVariables
   */
  readonly stringVariables: SingleComponentResponse<DestinyStringVariablesComponent, 'StringVariables', T>;
}
