import { ComponentData, ComponentResponse } from './ComponentTypes';

export interface DictionaryComponentResponse<Key extends number | string, C extends ComponentData>
  extends ComponentResponse<Record<Key, C>> {}
