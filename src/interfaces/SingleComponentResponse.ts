import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import { ResponseComponent } from './ResponseComponent';

export type SingleComponentResponse<
  T,
  R extends string & DestinyComponentType,
  K extends readonly DestinyComponentType[]
> = ResponseComponent<K, R, T>;
