/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { EmailViewDefinitionSetting } from './EmailViewDefinitionSetting';
/**
 * Represents a data-driven view for Email settings. Web/Mobile UI can use this
 * data to show new EMail settings consistently without further manual work.
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.EmailViewDefinition}
*/
export interface EmailViewDefinition {
    /** The identifier for this view. */
    readonly name: string;
    /** The ordered list of settings to show in this view. */
    readonly viewSettings: EmailViewDefinitionSetting[];
}