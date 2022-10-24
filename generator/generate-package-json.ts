import packageJson from './package.json';
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
    types: './index.d.ts',
    module: './index.js',
    scripts: {},
    dependencies: {},
    devDependencies: {},
  };

  writeOutFile(
    'generated-src/package.json.notyet',
    JSON.stringify(newPackageJson, undefined, '  ')
  );
}
