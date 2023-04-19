export class TokenRequestError extends Error {
    response;
    constructor(message, response) {
        super(message);
        this.response = response;
        this.name = 'BungieAPIError';
    }
}
