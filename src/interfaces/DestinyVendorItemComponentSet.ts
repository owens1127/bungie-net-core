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

export interface DestinyVendorItemComponentSet<K extends readonly DestinyComponentType[]> {
  readonly itemComponents: DictionaryComponentResponse<
    number,
    DestinyItemComponent,
    'ItemCommonData',
    K
  >;
  readonly instances: DictionaryComponentResponse<
    number,
    DestinyItemInstanceComponent,
    'ItemInstances',
    K
  >;
  readonly renderData: DictionaryComponentResponse<
    number,
    DestinyItemRenderComponent,
    'ItemRenderData',
    K
  >;
  readonly stats: DictionaryComponentResponse<number, DestinyItemStatsComponent, 'ItemStats', K>;
  readonly sockets: DictionaryComponentResponse<
    number,
    DestinyItemSocketsComponent,
    'ItemSockets',
    K
  >;
  readonly reusablePlugs: DictionaryComponentResponse<
    number,
    DestinyItemReusablePlugsComponent,
    'ItemReusablePlugs',
    K
  >;
  readonly plugObjectives: DictionaryComponentResponse<
    number,
    DestinyItemPlugObjectivesComponent,
    'ItemPlugObjectives',
    K
  >;
  readonly talentGrids: DictionaryComponentResponse<
    number,
    DestinyItemTalentGridComponent,
    'ItemTalentGrids',
    K
  >;
  readonly plugStates: DictionaryComponentResponse<
    number,
    DestinyItemPlugComponent,
    'ItemPlugStates',
    K
  >;
  readonly objectives: DictionaryComponentResponse<
    number,
    DestinyItemObjectivesComponent,
    'ItemObjectives',
    K
  >;
  readonly perks: DictionaryComponentResponse<number, DestinyItemPerksComponent, 'ItemPerks', K>;
}
