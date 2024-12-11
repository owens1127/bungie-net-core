import { ComponentPrivacySetting } from '../models/Components/ComponentPrivacySetting';
import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import type { DestinyComponentType as DestinyComponentTypeEnum } from '../enums/Destiny/DestinyComponentType';

/**
 * Given a set of keys K, when a component requires K,
 * determine if the response should contain a component of type T.
 */
export type ResponseComponent<
  K extends readonly DestinyComponentType[],
  R extends string & DestinyComponentType,
  T
> = K extends (R extends K[number] ? DestinyComponentType : R | (typeof DestinyComponentTypeEnum)[R])[]
  ? {
      readonly data?: T;
      readonly privacy: ComponentPrivacySetting;
      readonly disabled?: true;
    }
  : undefined;
