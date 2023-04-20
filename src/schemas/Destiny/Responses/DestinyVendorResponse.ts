/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { ComponentData } from '../../../generic/ComponentTypes';
import { DestinyComponentType } from '../DestinyComponentType';
import { SingleComponentResponse } from '../../../generic/SingleComponentResponse';
import { ConditionalComponent } from '../../../generic/ComponentTypes';
import { DestinyVendorComponent } from '../Entities/Vendors/DestinyVendorComponent';
import { DestinyVendorCategoriesComponent } from '../Entities/Vendors/DestinyVendorCategoriesComponent';
import { DictionaryComponentResponse } from '../../../generic/DictionaryComponentResponse';
import { DestinyVendorSaleItemComponent } from '../Entities/Vendors/DestinyVendorSaleItemComponent';
import { DestinyItemComponentSetOfint32 } from '../../DestinyItemComponentSetOfint32';
import { DestinyCurrenciesComponent } from '../Components/Inventory/DestinyCurrenciesComponent';
import { DestinyStringVariablesComponent } from '../Components/StringVariables/DestinyStringVariablesComponent';

/**
 * A response containing all of the components for a vendor.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyVendorResponse}
 */
export interface DestinyVendorResponse<T extends DestinyComponentType[]> extends ComponentData {
  /**
   * The base properties of the vendor.
   *
   * COMPONENT TYPE: Vendors
   */
  readonly vendor: ConditionalComponent<
    T,
    DestinyComponentType.Vendors,
    SingleComponentResponse<DestinyVendorComponent>
  >;
  /**
   * Categories that the vendor has available, and references to the sales therein.
   *
   * COMPONENT TYPE: VendorCategories
   */
  readonly categories: ConditionalComponent<
    T,
    DestinyComponentType.VendorCategories,
    SingleComponentResponse<DestinyVendorCategoriesComponent>
  >;
  /**
   * Sales, keyed by the vendorItemIndex of the item being sold.
   *
   * COMPONENT TYPE: VendorSales
   */
  readonly sales: ConditionalComponent<
    T,
    DestinyComponentType.VendorSales,
    DictionaryComponentResponse<number, DestinyVendorSaleItemComponent>
  >;
  /**
   * Item components, keyed by the vendorItemIndex of the active sale items.
   *
   * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component
   * types.]
   */
  readonly itemComponents: DestinyItemComponentSetOfint32<T>;
  /**
   * A "lookup" convenience component that can be used to quickly check if the
   * character has access to items that can be used for purchasing.
   *
   * COMPONENT TYPE: CurrencyLookups
   */
  readonly currencyLookups: ConditionalComponent<
    T,
    DestinyComponentType.CurrencyLookups,
    SingleComponentResponse<DestinyCurrenciesComponent>
  >;
  /**
   * A map of string variable values by hash for this character context.
   *
   * COMPONENT TYPE: StringVariables
   */
  readonly stringVariables: ConditionalComponent<
    T,
    DestinyComponentType.StringVariables,
    SingleComponentResponse<DestinyStringVariablesComponent>
  >;
}
