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
import { DestinyItemInstanceComponent } from './Destiny/Entities/Items/DestinyItemInstanceComponent.js';
import { DestinyItemRenderComponent } from './Destiny/Entities/Items/DestinyItemRenderComponent.js';
import { DestinyItemStatsComponent } from './Destiny/Entities/Items/DestinyItemStatsComponent.js';
import { DestinyItemSocketsComponent } from './Destiny/Entities/Items/DestinyItemSocketsComponent.js';
import { DestinyItemReusablePlugsComponent } from './Destiny/Components/Items/DestinyItemReusablePlugsComponent.js';
import { DestinyItemPlugObjectivesComponent } from './Destiny/Components/Items/DestinyItemPlugObjectivesComponent.js';
import { DestinyItemTalentGridComponent } from './Destiny/Entities/Items/DestinyItemTalentGridComponent.js';
import { DestinyItemPlugComponent } from './Destiny/Components/Items/DestinyItemPlugComponent.js';
import { DestinyItemObjectivesComponent } from './Destiny/Entities/Items/DestinyItemObjectivesComponent.js';
import { DestinyItemPerksComponent } from './Destiny/Entities/Items/DestinyItemPerksComponent.js';
/** @see {@link https://bungie-net.github.io/#/components/schemas/DestinyItemComponentSetOfint32} */
export interface DestinyItemComponentSetOfint32<T extends DestinyComponentType[]> {
    readonly instances: ConditionalComponent<T, DestinyComponentType.ItemInstances, DictionaryComponentResponse<number, DestinyItemInstanceComponent>>;
    readonly renderData: ConditionalComponent<T, DestinyComponentType.ItemRenderData, DictionaryComponentResponse<number, DestinyItemRenderComponent>>;
    readonly stats: ConditionalComponent<T, DestinyComponentType.ItemStats, DictionaryComponentResponse<number, DestinyItemStatsComponent>>;
    readonly sockets: ConditionalComponent<T, DestinyComponentType.ItemSockets, DictionaryComponentResponse<number, DestinyItemSocketsComponent>>;
    readonly reusablePlugs: ConditionalComponent<T, DestinyComponentType.ItemReusablePlugs, DictionaryComponentResponse<number, DestinyItemReusablePlugsComponent>>;
    readonly plugObjectives: ConditionalComponent<T, DestinyComponentType.ItemPlugObjectives, DictionaryComponentResponse<number, DestinyItemPlugObjectivesComponent>>;
    readonly talentGrids: ConditionalComponent<T, DestinyComponentType.ItemTalentGrids, DictionaryComponentResponse<number, DestinyItemTalentGridComponent>>;
    readonly plugStates: ConditionalComponent<T, DestinyComponentType.ItemPlugStates, DictionaryComponentResponse<string, DestinyItemPlugComponent>>;
    readonly objectives: ConditionalComponent<T, DestinyComponentType.ItemObjectives, DictionaryComponentResponse<number, DestinyItemObjectivesComponent>>;
    readonly perks: ConditionalComponent<T, DestinyComponentType.ItemPerks, DictionaryComponentResponse<number, DestinyItemPerksComponent>>;
}
