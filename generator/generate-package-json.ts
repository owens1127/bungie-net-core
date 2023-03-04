// @ts-ignore
import packageJson from '../package.json' assert { type: 'json' };
import { writeOutFile } from './generate-common.js';

/**
 * Generate a package.json file for the library, based on the package.json file at the
 * root of the repo.
 */
export function generatePackageJson() {
    const newPackageJson = {
        ...packageJson,
        main: './index.js',
        types: 'index.d.ts',
        module: './index.js',
        type: 'module',
        scripts: {},
        dependencies: {},
        devDependencies: {},
        homepage: 'https://github.com/owensimpson/OODestiny/tree/master/lib'
    };

    writeOutFile(
        'lib-ts/package.json',
        JSON.stringify(newPackageJson, undefined, '  ')
    );
}
