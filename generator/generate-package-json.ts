// @ts-ignore
import packageJson from '../package.json';
import { writeOutFile } from './generate-common.js';

/**
 * Generate a package.json file for the library, based on the package.json file at the
 * root of the repo.
 */
export function generatePackageJson() {

  // clear out dependencies
  const newPackageJson = {
    ...packageJson,
    main: './index.js',
    type: 'commonjs',
    scripts: {},
    dependencies: {},
    devDependencies: {},
  };

  writeOutFile(
    'lib/package.json',
    JSON.stringify(newPackageJson, undefined, '  ')
  );
}
