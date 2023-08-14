import _ from 'underscore';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
export function generateHeader(doc) {
    const { info } = doc;
    return `/**
 * ${info.title}
 * ${info.description}
 * 
 * OpenAPI spec version: ${info.version}
 * Contact: ${info.contact.email}
 * 
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//`;
}
export function docComment(text, params) {
    const lines = _.flatten(text
        .trim()
        .split('\n')
        .map(l => l.replace(/(.{1,80}(?:\W|$))/g, '$1\n').split('\n'))).map((s) => s.trim());
    lines.pop();
    if (params) {
        params.forEach(p => p
            .trim()
            .split('\n')
            .filter((s) => s.length > 0)
            .forEach(l => {
            lines.push(l);
        }));
    }
    if (lines.length === 1) {
        return `/** ${lines} */`;
    }
    else {
        return `/**
${lines.map(line => (line.length ? ' * ' + line : ' *')).join('\n')}
*/`;
    }
}
export function indent(text, indentLevel) {
    const lines = text.split('\n');
    return lines.map(line => '  '.repeat(indentLevel) + line).join('\n');
}
export async function writeOutFile(filename, contents) {
    try {
        await mkdirp(path.dirname(filename));
        fs.writeFile(filename, contents, () => { });
    }
    catch (e) {
        console.error(e);
    }
}
