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

export interface DestinyItemComponentSet<I extends number | string, K extends readonly DestinyComponentType[]> {
  readonly instances: DictionaryComponentResponse<I, DestinyItemInstanceComponent, 'ItemInstances', K>;
  readonly renderData: DictionaryComponentResponse<I, DestinyItemRenderComponent, 'ItemRenderData', K>;
  readonly stats: DictionaryComponentResponse<I, DestinyItemStatsComponent, 'ItemStats', K>;
  readonly sockets: DictionaryComponentResponse<I, DestinyItemSocketsComponent, 'ItemSockets', K>;
  readonly reusablePlugs: DictionaryComponentResponse<I, DestinyItemReusablePlugsComponent, 'ItemReusablePlugs', K>;
  readonly plugObjectives: DictionaryComponentResponse<I, DestinyItemPlugObjectivesComponent, 'ItemPlugObjectives', K>;
  readonly talentGrids: DictionaryComponentResponse<I, DestinyItemTalentGridComponent, 'ItemTalentGrids', K>;
  readonly plugStates: DictionaryComponentResponse<I, DestinyItemPlugComponent, 'ItemPlugStates', K>;
  readonly objectives: DictionaryComponentResponse<I, DestinyItemObjectivesComponent, 'ItemObjectives', K>;
  readonly perks: DictionaryComponentResponse<I, DestinyItemPerksComponent, 'ItemPerks', K>;
}
