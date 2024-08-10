/** @see {@link https://bungie-net.github.io/#/components/schemas/Applications.OAuthApplicationType} */
export const OAuthApplicationType = {
  None: 0,
  /**
   * Indicates the application is server based and can keep its secrets from end
   * users and other potential snoops.
   */
  Confidential: 1,
  /**
   * Indicates the application runs in a public place, and it can't be trusted to
   * keep a secret.
   */
  Public: 2
} as const;
