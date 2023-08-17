import { ComponentPrivacySetting } from '../models/Components/ComponentPrivacySetting';
import { DestinyComponentType } from '../models/Destiny/DestinyComponentType';

/**
 * If we can infer the components used in this type, we can determine when that component
 * is undefined, otherwise we just let it pass through
 */
export type ResponseComponent<
  K extends readonly DestinyComponentType[],
  R extends DestinyComponentType,
  T
> = K extends (infer A)[]
  ? R extends A
    ? {
        readonly data?: T;
        readonly privacy: ComponentPrivacySetting;
        readonly disabled?: true;
      }
    : undefined
  : {
      readonly data?: T;
      readonly privacy: ComponentPrivacySetting;
      readonly disabled?: true;
    };
