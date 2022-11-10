export declare type Token = {
    value: string;
    type: 'access' | 'refresh';
    created: number;
    expires: number;
};
export declare type BungieNetTokens = {
    bungieMembershipId: string;
    access: Token;
    refresh: Token;
};
export declare type TokenResponse = {
    membership_id: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    refresh_expires_in: number;
};
export declare function getAccessTokenFromAuthCode(code: string): Promise<BungieNetTokens>;
export declare function getAccessTokenFromRefreshToken(refreshToken: string): Promise<BungieNetTokens>;
