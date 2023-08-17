/** @see {@link https://bungie-net.github.io/#/components/schemas/Forum.ForumTopicsSortEnum} */
export const ForumTopicsSortEnum = {
  Default: 0,
  LastReplied: 1,
  MostReplied: 2,
  Popularity: 3,
  Controversiality: 4,
  Liked: 5,
  HighestRated: 6,
  MostUpvoted: 7
} as const;
