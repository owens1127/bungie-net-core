import {docComment, indent, writeOutFile} from "./generate-common.js";

export function generateClient(tags: string[]) {

    // const properties = tags.map((tag) => {
    //     return `@property ${tag}`
    // });
    const comment = docComment('A client for interacting with the Bungie.net API');
    const imports = tags.map(tag => {return `import * as ${tag}Import from '../endpoints/${tag}/index.js';`});
    const client = `${imports.join('\n')}\nexport type InstancedImport = { client: BungieClient }
${comment}\nexport class BungieClient {
${indent(tags.map(tag => {return `readonly ${tag}: typeof ${tag}Import & InstancedImport;`}).join('\n') + '\npublic access_token?: string', 1)}
   constructor(access_token?: string) {
${indent(`this.access_token = access_token;\n` + 
        tags.map(tag => {return `this.${tag} = {...${tag}Import, client: this};`}).join('\n'), 3)}
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