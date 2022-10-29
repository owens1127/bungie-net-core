// @ts-ignore
import packageJson from '../package.json';
import { writeOutFile } from './generate-common.js';

/**
 * Generate a package.json file for the library, based on the package.json file at the
 * root of the repo.
 */
export function generatePackageJson() {

  const newPackageJson = {
    ...packageJson,
    main: './index.js',
    type: 'commonjs',
    scripts: {},
    dependencies: {
      "node-fetch-commonjs": "^3.2.4"
    },
    devDependencies: {},
    homepage: "https://github.com/owensimpson/OODestiny/tree/master/lib",
  };

  writeOutFile(
    'lib/package.json',
    JSON.stringify(newPackageJson, undefined, '  ')
  );
}
