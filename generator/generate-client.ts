import {docComment, indent, writeOutFile} from "./generate-common.js";

export function generateClient(tags: string[]) {

    // const properties = tags.map((tag) => {
    //     return `@property ${tag}`
    // });
    const comment = docComment('A client for interacting with the Bungie.net API');
    const client = `${comment}\nmodule.exports = class BungieClient {
    constructor(access_token) {
${indent(`if (access_token) this.login(access_token);\n` + 
        tags.map(tag => {return `this.${tag} = require('../endpoints/${tag}/index.js');`}).join('\n') + `
// bind 'this' to all API endpoint functions
for (const tag in this) {
    for (const property in this[tag]) {
        if (typeof this[tag][property] === 'function') this[tag][property] = this[tag][property].bind(this);
    }
}`, 3)}
    }
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    login(access_token) {
        this.access_token = access_token;
    }
    
    /**
     * Log the Client out.
     */
    logout() {
        this.access_token = null;
    }
}`

    writeOutFile('lib/util/client.js', client)
}