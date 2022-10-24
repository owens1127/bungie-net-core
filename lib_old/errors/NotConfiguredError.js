export class NotConfiguredError extends Error {
    constructor() {
        super();
        this.message =
            'Please configure your API key, Client ID, and Client Secret first using the oodestiny#configure() function'
    }

}