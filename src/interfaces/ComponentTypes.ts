import { ComponentPrivacySetting } from '../models/Components/ComponentPrivacySetting';

export interface ComponentData {}

export type ConditionalComponent<
  Input extends any[],
  Required extends Input[number],
  Property
> = Input extends (infer T)[]
  ? Required extends T
    ? Property
    : undefined
  : never;

export interface ComponentResponse<T> {
  readonly data?: T;
  readonly privacy: ComponentPrivacySetting;
  readonly disabled?: true;
}
