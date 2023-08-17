/**
 * The types of credentials the Accounts system supports. This is the external
 * facing enum used in place of the internal-only Bungie.SharedDefinitions.
 * CredentialType.
 * @see {@link https://bungie-net.github.io/#/components/schemas/BungieCredentialType}
 */
export const BungieCredentialType = {
  None: 0,
  Xuid: 1,
  Psnid: 2,
  Wlid: 3,
  Fake: 4,
  Facebook: 5,
  Google: 8,
  Windows: 9,
  DemonId: 10,
  SteamId: 12,
  BattleNetId: 14,
  StadiaId: 16,
  TwitchId: 18,
  EgsId: 20
} as const;
