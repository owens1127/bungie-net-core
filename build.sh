#!/bin/sh -ex

# Prepare the library folder(s)
rm -rf ./build && mkdir -p build
rm -rf ./lib && mkdir -p lib
rm -rf ./__test__/api && mkdir -p __test__/api

# clean the src folder from files that are not generated
rm -rf ./src/endpoints
rm -rf ./src/schemas
rm ./src/manifest/manifest-types.ts
rm ./src/util/client.ts

# Compile the generator into ./build
tsc -p tsconfig.generator.json ; echo Generator compiled to JavaScript with tsc

# Run the generator to produce typescript library in ./src
node --experimental-json-modules ./build/generate.js ; echo Generation complete, Library TypeScript generated

# fix one small error
perl -pi -e 's/item: DestinyItemResponse/item: DestinyItemResponse<any>/g' ./src/schemas/Destiny/Responses/DestinyItemChangeResponse.ts

# Transpile the library from TypeScript to js + .d.ts files
tsc -p tsconfig.lib.json ; echo Library transpiled

cp ./src/bungie-api-LICENSE ./lib/bungie-api-LICENSE
cp ./src/package.json ./lib/package.json
cp ./src/README.md ./lib/README.md

typedoc --tsconfig ./tsconfig.lib.json ./src/**/* --exclude */index.ts --json __test__/schema.json

# beautify
prettier --loglevel silent --config .prettierrc --write '{lib}/**/*.{ts,js}'; echo Library formatted