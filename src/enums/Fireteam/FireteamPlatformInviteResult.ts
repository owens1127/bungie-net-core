/** @see {@link https://bungie-net.github.io/#/components/schemas/Fireteam.FireteamPlatformInviteResult} */
export const FireteamPlatformInviteResult = {
  None: 0,
  Success: 1,
  AlreadyInFireteam: 2,
  Throttled: 3,
  ServiceError: 4
} as const;
