import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import { ResponseComponent } from './ResponseComponent';

export type DictionaryComponentResponse<
  I extends number | string,
  D,
  R extends string & DestinyComponentType,
  K extends readonly DestinyComponentType[]
> = ResponseComponent<K, R, Record<I, D>>;
