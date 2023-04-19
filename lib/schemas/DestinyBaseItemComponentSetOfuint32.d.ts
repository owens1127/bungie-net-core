/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyComponentType } from './Destiny/DestinyComponentType.js';
import { DictionaryComponentResponse } from '../generic/DictionaryComponentResponse.js';
import { ConditionalComponent } from '../generic/ComponentTypes.js';
import { DestinyItemObjectivesComponent } from './Destiny/Entities/Items/DestinyItemObjectivesComponent.js';
import { DestinyItemPerksComponent } from './Destiny/Entities/Items/DestinyItemPerksComponent.js';
/** @see {@link https://bungie-net.github.io/#/components/schemas/DestinyBaseItemComponentSetOfuint32} */
export interface DestinyBaseItemComponentSetOfuint32<T extends DestinyComponentType[]> {
    readonly objectives: ConditionalComponent<T, DestinyComponentType.ItemObjectives, DictionaryComponentResponse<string, DestinyItemObjectivesComponent>>;
    readonly perks: ConditionalComponent<T, DestinyComponentType.ItemPerks, DictionaryComponentResponse<string, DestinyItemPerksComponent>>;
}
