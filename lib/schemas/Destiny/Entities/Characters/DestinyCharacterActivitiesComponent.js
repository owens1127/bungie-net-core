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

/**
 * This component holds activity data for a character. It will tell you about the
 * character's current activity status, as well as activities that are available to
 * the user.
 * @type DestinyCharacterActivitiesComponent
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Characters.DestinyCharacterActivitiesComponent}
*/
class DestinyCharacterActivitiesComponent {
  /**
   * The last date that the user started playing an activity.
   * @readonly
   * @type string
  */
  dateActivityStarted;
  /**
   * The list of activities that the user can play.
   * @readonly
   * @type DestinyActivity[]
  */
  availableActivities;
  /**
   * If the user is in an activity, this will be the hash of the Activity being
   * played. Note that you must combine this info with currentActivityModeHash to get
   * a real picture of what the user is doing right now. For instance, PVP "
   * Activities" are just maps: it's the ActivityMode that determines what type of
   * PVP game they're playing. Mapped to DestinyActivityDefinition in the manifest.
   * @readonly
   * @type number
  */
  currentActivityHash;
  /**
   * If the user is in an activity, this will be the hash of the activity mode being
   * played. Combine with currentActivityHash to give a person a full picture of what
   * they're doing right now. Mapped to DestinyActivityModeDefinition in the manifest.
   * @readonly
   * @type number
  */
  currentActivityModeHash;
  /**
   * And the current activity's most specific mode type, if it can be found.
   * @readonly
   * @type number?
  */
  currentActivityModeType;
  /**
   * If the user is in an activity, this will be the hashes of the
   * DestinyActivityModeDefinition being played. Combine with currentActivityHash to
   * give a person a full picture of what they're doing right now. Mapped to
   * DestinyActivityModeDefinition in the manifest.
   * @readonly
   * @type number[]
  */
  currentActivityModeHashes;
  /**
   * All Activity Modes that apply to the current activity being played, in enum form.
   * @readonly
   * @type DestinyActivityModeType[]
  */
  currentActivityModeTypes;
  /**
   * If the user is in a playlist, this is the hash identifier for the playlist that
   * they chose. Mapped to DestinyActivityDefinition in the manifest.
   * @readonly
   * @type number?
  */
  currentPlaylistActivityHash;
  /**
   * This will have the activity hash of the last completed story/campaign mission,
   * in case you care about that. Mapped to DestinyActivityDefinition in the manifest.
   * @readonly
   * @type number
  */
  lastCompletedStoryHash;
}
module.exports = DestinyCharacterActivitiesComponent;