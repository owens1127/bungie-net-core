import { ComponentPrivacySetting } from '../models/Components/ComponentPrivacySetting';
import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';
import type { DestinyComponentType as DestinyComponentTypeEnum } from '../enums/Destiny/DestinyComponentType';

/**
 * Given a set of user provided components K...
 * When a component requires R...
 *
 * If K is a subset of R, then the response should contain a component of type T.
 */
export type ResponseComponent<
  K extends readonly DestinyComponentType[],
  R extends string & DestinyComponentType,
  T
> = K[number] & (R extends K[number] ? DestinyComponentType : R | (typeof DestinyComponentTypeEnum)[R]) extends never
  ? undefined
  : {
      readonly data?: T;
      readonly privacy: ComponentPrivacySetting;
      readonly disabled?: true;
    };
