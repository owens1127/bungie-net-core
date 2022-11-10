import {docComment, indent, writeOutFile} from "./generate-common.js";

export function generateClient(tags: string[]) {

    // const properties = tags.map((tag) => {
    //     return `@property ${tag}`
    // });
    const comment = docComment('A client for interacting with the Bungie.net API');
    const imports = tags.map(tag => {return `import * as ${tag}Import from '../endpoints/${tag}';`});
    const client = `${imports.join('\n')}\n${comment}\nexport class BungieClient {
${indent(tags.map(tag => {return `readonly ${tag}: typeof ${tag}Import ;`}).join('\n') + '\npublic access_token?: string', 1)}
   constructor(access_token?: string) {
${indent(`this.access_token = access_token;\n` + 
        tags.map(tag => {return `this.${tag} = ${tag}Import`}).join('\n') + `
// bind 'this' to all API endpoint functions
for (const tag in this) {
    for (const property in this[tag]) {
        // @ts-ignore
        if (typeof this[tag][property] === 'function') this[tag][property] = this[tag][property].bind(this);
    }
}`, 3)}
    }
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    login(access_token: string) {
        this.access_token = access_token;
    }
    
    /**
     * Log the Client out.
     */
    logout() {
        this.access_token = undefined;
    }
}`

    writeOutFile('lib-ts/util/client.ts', client)
}