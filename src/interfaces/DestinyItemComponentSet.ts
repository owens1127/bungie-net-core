import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import { DictionaryComponentResponse } from './DictionaryComponentResponse';
import { DestinyItemInstanceComponent } from '../models/Destiny/Entities/Items/DestinyItemInstanceComponent';
import { DestinyItemRenderComponent } from '../models/Destiny/Entities/Items/DestinyItemRenderComponent';
import { DestinyItemSocketsComponent } from '../models/Destiny/Entities/Items/DestinyItemSocketsComponent';
import { DestinyItemStatsComponent } from '../models/Destiny/Entities/Items/DestinyItemStatsComponent';
import { DestinyItemReusablePlugsComponent } from '../models/Destiny/Components/Items/DestinyItemReusablePlugsComponent';
import { DestinyItemPlugObjectivesComponent } from '../models/Destiny/Components/Items/DestinyItemPlugObjectivesComponent';
import { DestinyItemTalentGridComponent } from '../models/Destiny/Entities/Items/DestinyItemTalentGridComponent';
import { DestinyItemPlugComponent } from '../models/Destiny/Components/Items/DestinyItemPlugComponent';
import { DestinyItemObjectivesComponent } from '../models/Destiny/Entities/Items/DestinyItemObjectivesComponent';
import { DestinyItemPerksComponent } from '../models/Destiny/Entities/Items/DestinyItemPerksComponent';

export interface DestinyItemComponentSet<K extends number | string, T extends readonly DestinyComponentType[]> {
  readonly instances: DictionaryComponentResponse<
    K,
    DestinyItemInstanceComponent,
    T,
    DestinyComponentType.ItemInstances
  >;
  readonly renderData: DictionaryComponentResponse<
    K,
    DestinyItemRenderComponent,
    T,
    DestinyComponentType.ItemRenderData
  >;
  readonly stats: DictionaryComponentResponse<K, DestinyItemStatsComponent, T, DestinyComponentType.ItemStats>;
  readonly sockets: DictionaryComponentResponse<K, DestinyItemSocketsComponent, T, DestinyComponentType.ItemSockets>;
  readonly reusablePlugs: DictionaryComponentResponse<
    K,
    DestinyItemReusablePlugsComponent,
    T,
    DestinyComponentType.ItemReusablePlugs
  >;
  readonly plugObjectives: DictionaryComponentResponse<
    K,
    DestinyItemPlugObjectivesComponent,
    T,
    DestinyComponentType.ItemPlugObjectives
  >;
  readonly talentGrids: DictionaryComponentResponse<
    K,
    DestinyItemTalentGridComponent,
    T,
    DestinyComponentType.ItemTalentGrids
  >;
  readonly plugStates: DictionaryComponentResponse<K, DestinyItemPlugComponent, T, DestinyComponentType.ItemPlugStates>;
  readonly objectives: DictionaryComponentResponse<
    K,
    DestinyItemObjectivesComponent,
    T,
    DestinyComponentType.ItemObjectives
  >;
  readonly perks: DictionaryComponentResponse<K, DestinyItemPerksComponent, T, DestinyComponentType.ItemPerks>;
}
