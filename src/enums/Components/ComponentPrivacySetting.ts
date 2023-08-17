/**
 * A set of flags for reason(s) why the component populated in the way that it did.
 * Inspect the individual flags for the reasons.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Components.ComponentPrivacySetting}
 */
export const ComponentPrivacySetting = {
  None: 0,
  Public: 1,
  Private: 2
} as const;
