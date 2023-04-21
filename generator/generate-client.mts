import { docComment, indent, writeOutFile } from './generate-common.mjs';

export function generateClient(tags: string[]) {
  // const properties = tags.map((tag) => {
  //     return `@property ${tag}`
  // });
  const comment = docComment('A client for interacting with the Bungie.net API');
  const imports = tags.map(tag => `import * as ${tag}Import from '../endpoints/${tag}';`);
  const client = `${imports.join('\n')}\nexport type AccessTokenObject = { access_token?: string };
${comment}\nexport class BungieClient {
${indent(
  tags
    .map(tag => {
      return `readonly ${tag}: typeof ${tag}Import & AccessTokenObject;`;
    })
    .join('\n') + '\n// tslint:disable-next-line\npublic access_token?: string',
  1
)}
  // tslint:disable-next-line
  constructor(access_token?: string) {
${indent(
  `this.access_token = access_token;\n` +
    tags
      .map(tag => {
        return `this.${tag} = {...${tag}Import, access_token };`;
      })
      .join('\n'),
  3
)}
    }
    
    /**
     * Log a Client in. Remember, access codes need to be re-issued every 60 minutes.
     */
    login(token: string) {
        this.access_token = token;
        ${tags
          .map(tag => {
            return `this.${tag}.access_token = token;`;
          })
          .join('\n')}
    }
    
    /**
     * Log the Client out.
     */
    logout() {
        this.access_token = undefined;
        ${tags
          .map(tag => {
            return `this.${tag}.access_token = undefined;`;
          })
          .join('\n')}
    }
}`;

  writeOutFile('src/util/client.ts', client);
}
