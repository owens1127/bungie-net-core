import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import { ResponseComponent } from './ResponseComponent';

export type SingleComponentResponse<
  D,
  T extends readonly DestinyComponentType[],
  C extends DestinyComponentType
> = ResponseComponent<T, C, D>;
