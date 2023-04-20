/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.4
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyMilestoneRewardEntryDefinition } from './DestinyMilestoneRewardEntryDefinition';
/**
 * The definition of a category of rewards, that contains many individual rewards.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneRewardCategoryDefinition}
*/
export interface DestinyMilestoneRewardCategoryDefinition {
    /**
     * Identifies the reward category. Only guaranteed unique within this specific
     * component!
    */
    readonly categoryHash: number;
    /**
     * The string identifier for the category, if you want to use it for some end.
     * Guaranteed unique within the specific component.
    */
    readonly categoryIdentifier: string;
    /** Hopefully this is obvious by now. */
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /**
     * If this milestone can provide rewards, this will define the sets of rewards that
     * can be earned, the conditions under which they can be acquired, internal data
     * that we'll use at runtime to determine whether you've already earned or redeemed
     * this set of rewards, and the category that this reward should be placed under.
    */
    readonly rewardEntries: {
        [key: number]: DestinyMilestoneRewardEntryDefinition;
    };
    /**
     * If you want to use BNet's recommended order for rendering categories
     * programmatically, use this value and compare it to other categories to determine
     * the order in which they should be rendered. I don't feel great about putting
     * this here, I won't lie.
    */
    readonly order: number;
}
