import mkdirp from 'mkdirp';
import { writeFile } from 'fs';
import path from 'path';
import _ from 'underscore';
import { OpenAPIObject } from 'openapi3-ts';

export function generateHeader(doc: OpenAPIObject): string {
  const { info } = doc;
  return `/**
   * ${info.title}
   * ${info.description}
   * 
   * Contact: ${info.contact!.email}
   * 
   * NOTE: This class is auto generated by the bungie-net-core code generator program
   * Repository: {@link https://github.com/owensimpson/bungie-net-core}
   * Do not edit these files manually.
   */
  //`;
}

export function docComment(text: string, params?: string[]) {
  const lines = _.flatten(
    text
      .trim()
      .split('\n')
      .map(l => l.replace(/(.{1,80}(?:\W|$))/g, '$1\n').split('\n'))
  ).map((s: string) => s.trim());
  lines.pop();
  if (params) {
    params.forEach(p =>
      p
        .trim()
        .split('\n')
        .filter((s: string) => s.length > 0)
        .forEach(l => {
          lines.push(l);
        })
    );
  }

  if (lines.length === 1) {
    return `/** ${lines} */`;
  } else {
    return `/**
  ${lines.map(line => (line.length ? ' * ' + line : ' *')).join('\n')}
  */`;
  }
}

export function indent(text: string, indentLevel: number) {
  const lines = text.split('\n');
  return lines.map(line => '  '.repeat(indentLevel) + line).join('\n');
}

export async function writeOutFile(filename: string, suffix: string, contents: string) {
  const fullPath = filename + suffix;
  try {
    await mkdirp(path.dirname(fullPath));

    writeFile(fullPath, contents, () => {});
  } catch (e) {
    console.error(e);
  }
}

export function generateImports(
  currentFile: string,
  fileName: string,
  componentNames: string[],
  exprt: boolean = false
) {
  const components = _.compact(componentNames);
  if (fileName === currentFile || !components.length) return null;
  const start = path.join(process.cwd(), './src', currentFile);
  const end = path.join(process.cwd(), './src', fileName);
  const relative = path.relative(start, end);
  return `${exprt ? 'export' : 'import'} { ${components.join(', ')} } from '${
    relative.startsWith('../../') ? relative.substring(3) : relative.substring(1)
  }'`;
}

export function seeLink(component: string) {
  return `@see {@link https://bungie-net.github.io/${component}}`;
}

export function camelCase(name: string) {
  return name[0].toLowerCase() + name.substring(1);
}
