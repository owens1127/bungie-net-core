import { ComponentPrivacySetting } from '../schemas/Components/ComponentPrivacySetting';
export interface ComponentData {
}
export declare type ConditionalComponent<Input extends Array<any>, Required extends Input[number], Property> = Input extends Array<infer T> ? (Required extends T ? Property : undefined) : never;
export interface ComponentResponse<T> {
    readonly data: T;
    readonly privacy: ComponentPrivacySetting;
    readonly disabled?: true;
}
