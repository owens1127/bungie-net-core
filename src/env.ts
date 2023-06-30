export type BungieCredentials = {
  BUNGIE_API_KEY: string;
  BUNGIE_CLIENT_ID: string;
  BUNGIE_CLIENT_SECRET: string;
};
export const getBungieEnv = (): BungieCredentials => ({
  BUNGIE_API_KEY: process.env.BUNGIE_API_KEY ?? '',
  BUNGIE_CLIENT_ID: process.env.BUNGIE_CLIENT_ID ?? '',
  BUNGIE_CLIENT_SECRET: process.env.BUNGIE_CLIENT_SECRET ?? ''
});
