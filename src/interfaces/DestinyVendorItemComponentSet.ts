import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import { DictionaryComponentResponse } from './DictionaryComponentResponse';
import { DestinyItemComponent } from '../models/Destiny/Entities/Items/DestinyItemComponent';
import { DestinyItemInstanceComponent } from '../models/Destiny/Entities/Items/DestinyItemInstanceComponent';
import { DestinyItemRenderComponent } from '../models/Destiny/Entities/Items/DestinyItemRenderComponent';
import { DestinyItemStatsComponent } from '../models/Destiny/Entities/Items/DestinyItemStatsComponent';
import { DestinyItemSocketsComponent } from '../models/Destiny/Entities/Items/DestinyItemSocketsComponent';
import { DestinyItemReusablePlugsComponent } from '../models/Destiny/Components/Items/DestinyItemReusablePlugsComponent';
import { DestinyItemPlugObjectivesComponent } from '../models/Destiny/Components/Items/DestinyItemPlugObjectivesComponent';
import { DestinyItemTalentGridComponent } from '../models/Destiny/Entities/Items/DestinyItemTalentGridComponent';
import { DestinyItemPlugComponent } from '../models/Destiny/Components/Items/DestinyItemPlugComponent';
import { DestinyItemObjectivesComponent } from '../models/Destiny/Entities/Items/DestinyItemObjectivesComponent';
import { DestinyItemPerksComponent } from '../models/Destiny/Entities/Items/DestinyItemPerksComponent';

/** @see {@link https://bungie-net.github.io/#/components/schemas/DestinyVendorItemComponentSetOfint32} */

export interface DestinyVendorItemComponentSet<T extends readonly DestinyComponentType[]> {
  readonly itemComponents: DictionaryComponentResponse<
    number,
    DestinyItemComponent,
    T,
    DestinyComponentType.ItemCommonData
  >;
  readonly instances: DictionaryComponentResponse<
    number,
    DestinyItemInstanceComponent,
    T,
    DestinyComponentType.ItemInstances
  >;
  readonly renderData: DictionaryComponentResponse<
    number,
    DestinyItemRenderComponent,
    T,
    DestinyComponentType.ItemRenderData
  >;
  readonly stats: DictionaryComponentResponse<number, DestinyItemStatsComponent, T, DestinyComponentType.ItemStats>;
  readonly sockets: DictionaryComponentResponse<
    number,
    DestinyItemSocketsComponent,
    T,
    DestinyComponentType.ItemSockets
  >;
  readonly reusablePlugs: DictionaryComponentResponse<
    number,
    DestinyItemReusablePlugsComponent,
    T,
    DestinyComponentType.ItemReusablePlugs
  >;
  readonly plugObjectives: DictionaryComponentResponse<
    number,
    DestinyItemPlugObjectivesComponent,
    T,
    DestinyComponentType.ItemPlugObjectives
  >;
  readonly talentGrids: DictionaryComponentResponse<
    number,
    DestinyItemTalentGridComponent,
    T,
    DestinyComponentType.ItemTalentGrids
  >;
  readonly plugStates: DictionaryComponentResponse<
    number,
    DestinyItemPlugComponent,
    T,
    DestinyComponentType.ItemPlugStates
  >;
  readonly objectives: DictionaryComponentResponse<
    number,
    DestinyItemObjectivesComponent,
    T,
    DestinyComponentType.ItemObjectives
  >;
  readonly perks: DictionaryComponentResponse<number, DestinyItemPerksComponent, T, DestinyComponentType.ItemPerks>;
}
