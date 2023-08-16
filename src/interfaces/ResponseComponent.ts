import { ComponentPrivacySetting } from '../enums/Components/ComponentPrivacySetting';
import { DestinyComponentType } from '../enums/Destiny/DestinyComponentType';

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
  : never;
