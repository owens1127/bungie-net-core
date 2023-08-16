/**
 * Provides common properties for destiny definitions.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyDefinition}
 */

export type DestinyDefinition<T> = {
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   */
  readonly hash: number;
  /** The index of the entity as it was found in the investment tables. */
  readonly index: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   */
  readonly redacted: boolean;
} & T;
