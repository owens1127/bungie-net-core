import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import { DictionaryComponentResponse } from './DictionaryComponentResponse';
import { DestinyItemObjectivesComponent } from '../models/Destiny/Entities/Items/DestinyItemObjectivesComponent';
import { DestinyItemPerksComponent } from '../models/Destiny/Entities/Items/DestinyItemPerksComponent';

export interface DestinyBaseItemComponentSet<T extends readonly DestinyComponentType[]> {
  readonly objectives: DictionaryComponentResponse<
    number,
    DestinyItemObjectivesComponent,
    T,
    DestinyComponentType.ItemObjectives
  >;
  readonly perks: DictionaryComponentResponse<number, DestinyItemPerksComponent, T, DestinyComponentType.ItemPerks>;
}
