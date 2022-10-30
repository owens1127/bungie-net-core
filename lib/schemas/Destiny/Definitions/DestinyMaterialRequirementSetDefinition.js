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
 * Represent a set of material requirements: Items that either need to be owned or
 * need to be consumed in order to perform an action.
 *
 * A variety of other entities refer to these as gatekeepers and payments for
 * actions that can be performed in game.
 * @type DestinyMaterialRequirementSetDefinition
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyMaterialRequirementSetDefinition}
*/
class DestinyMaterialRequirementSetDefinition {
  /**
   * The list of all materials that are required.
   * @readonly
   * @type DestinyMaterialRequirement[]
  */
  materials;
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   * @readonly
   * @type number
  */
  hash;
  /**
   * The index of the entity as it was found in the investment tables.
   * @readonly
   * @type number
  */
  index;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   * @readonly
   * @type boolean
  */
  redacted;
}
module.exports = DestinyMaterialRequirementSetDefinition;