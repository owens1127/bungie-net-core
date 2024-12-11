import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import { DictionaryComponentResponse } from './DictionaryComponentResponse';
import { DestinyItemObjectivesComponent } from '../models/Destiny/Entities/Items/DestinyItemObjectivesComponent';
import { DestinyItemPerksComponent } from '../models/Destiny/Entities/Items/DestinyItemPerksComponent';

export interface DestinyBaseItemComponentSet<T extends readonly DestinyComponentType[]> {
  readonly objectives: DictionaryComponentResponse<number, DestinyItemObjectivesComponent, 'ItemObjectives', T>;
  readonly perks: DictionaryComponentResponse<number, DestinyItemPerksComponent, 'ItemPerks', T>;
}
