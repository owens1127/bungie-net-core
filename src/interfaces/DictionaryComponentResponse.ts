import { DestinyComponentType } from '../enums/Destiny/DestinyComponentType';
import { ResponseComponent } from './ResponseComponent';

export type DictionaryComponentResponse<
  K extends number | string,
  D,
  T extends readonly DestinyComponentType[],
  C extends DestinyComponentType
> = ResponseComponent<T, C, Record<K, D>>;
