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
import { DestinyProgression } from '../../DestinyProgression';
import { DestinyFactionProgression } from '../../Progression/DestinyFactionProgression';
import { DestinyMilestone } from '../../Milestones/DestinyMilestone';
import { DestinyQuestStatus } from '../../Quests/DestinyQuestStatus';
import { DestinyObjectiveProgress } from '../../Quests/DestinyObjectiveProgress';
import { DestinyItemPerksComponent } from '../Items/DestinyItemPerksComponent';
import { DestinyArtifactCharacterScoped } from '../../Artifacts/DestinyArtifactCharacterScoped';
/**
 * This component returns anything that could be considered "Progression" on a user:
 * data where the user is gaining levels, reputation, completions, rewards, etc...
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Characters.DestinyCharacterProgressionComponent}
*/
export interface DestinyCharacterProgressionComponent {
    /**
     * A Dictionary of all known progressions for the Character, keyed by the
     * Progression's hash.
     *
     * Not all progressions have user-facing data, but those who do will have that data
     * contained in the DestinyProgressionDefinition. Mapped to
     * DestinyProgressionDefinition in the manifest.
    */
    readonly progressions: {
        [key: number]: DestinyProgression;
    };
    /**
     * A dictionary of all known Factions, keyed by the Faction's hash. It contains
     * data about this character's status with the faction. Mapped to
     * DestinyFactionDefinition in the manifest.
    */
    readonly factions: {
        [key: number]: DestinyFactionProgression;
    };
    /**
     * Milestones are related to the simple progressions shown in the game, but return
     * additional and hopefully helpful information for users about the specifics of
     * the Milestone's status. Mapped to DestinyMilestoneDefinition in the manifest.
    */
    readonly milestones: {
        [key: number]: DestinyMilestone;
    };
    /**
     * If the user has any active quests, the quests' statuses will be returned here.
     *
     * Note that quests have been largely supplanted by Milestones, but that doesn't
     * mean that they won't make a comeback independent of milestones at some point.
     *
     * (Fun fact: quests came back as I feared they would, but we never looped back to
     * populate this... I'm going to put that in the backlog.)
    */
    readonly quests: DestinyQuestStatus[];
    /**
     * Sometimes, you have items in your inventory that don't have instances, but still
     * have Objective information. This provides you that objective information for
     * uninstanced items.
     *
     * This dictionary is keyed by the item's hash: which you can use to look up the
     * name and description for the overall task(s) implied by the objective. The value
     * is the list of objectives for this item, and their statuses. Mapped to
     * DestinyInventoryItemDefinition in the manifest.
    */
    readonly uninstancedItemObjectives: {
        [key: number]: DestinyObjectiveProgress[];
    };
    /**
     * Sometimes, you have items in your inventory that don't have instances, but still
     * have perks (for example: Trials passage cards). This gives you the perk
     * information for uninstanced items.
     *
     * This dictionary is keyed by item hash, which you can use to look up the
     * corresponding item definition. The value is the list of perks states for the
     * item. Mapped to DestinyInventoryItemDefinition in the manifest.
    */
    readonly uninstancedItemPerks: {
        [key: number]: DestinyItemPerksComponent;
    };
    /**
     * The set of checklists that can be examined for this specific character, keyed by
     * the hash identifier of the Checklist (DestinyChecklistDefinition)
     *
     * For each checklist returned, its value is itself a Dictionary keyed by the
     * checklist's hash identifier with the value being a boolean indicating if it's
     * been discovered yet. Mapped to DestinyChecklistDefinition in the manifest.
    */
    readonly checklists: {
        [key: number]: {
            [key: number]: boolean;
        };
    };
    /**
     * Data related to your progress on the current season's artifact that can vary per
     * character.
    */
    readonly seasonalArtifact: DestinyArtifactCharacterScoped;
}
