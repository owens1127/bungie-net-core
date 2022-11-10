/** A client for interacting with the Bungie.net API */
export declare class BungieClient {
    private App;
    private User;
    private Content;
    private Forum;
    private GroupV2;
    private Tokens;
    private Destiny2;
    private CommunityContent;
    private Trending;
    private Fireteam;
    private Social;
    private Core;
    access_token?: string;
    constructor(access_token?: string);
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    login(access_token: string): void;
    /**
     * Log the Client out.
     */
    logout(): void;
}
