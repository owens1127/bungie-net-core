/**
 * Represents an error receiving data that could not be added into the cache
 */
export class InvalidComponentsError extends TypeError {
    constructor(message) {
        super(message);
    }

}
