/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Forum.ForumTopicsCategoryFiltersEnum}
 */
export const ForumTopicsCategoryFiltersEnum = {
  None: 0,
  Links: 1,
  Questions: 2,
  AnsweredQuestions: 4,
  Media: 8,
  TextOnly: 16,
  Announcement: 32,
  BungieOfficial: 64,
  Polls: 128
} as const;
