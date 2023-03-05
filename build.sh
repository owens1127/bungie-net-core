#!/bin/sh -ex

# Prepare the library folder(s)
rm -rf ./build && mkdir -p build
rm -rf ./lib-ts && mkdir -p lib-ts
rm -rf ./lib && mkdir -p lib
rm -rf ./test && mkdir -p test

# Compile the generator into ./build
tsc -p tsconfig-generator.json ; echo Generator compiled to JavaScript with tsc

# Run the generator to produce typescript library in ./lib-ts
node --experimental-json-modules ./build/generate.js ; echo Library TypeScript generated

# Copy files from ./src into ./lib-ts
cp -a lib-src/. lib-ts/

# compile typescript into js using babel
babel lib-ts --out-dir lib --extensions ".ts" --config-file './.babelrc'

# compile the typings to .d.ts files using tsc
tsc -p tsconfig-lib.json ; echo TypeScript typings transpiled to .d.ts files with tsc

mv ./lib-ts/bungie-api-LICENSE ./lib/bungie-api-LICENSE
mv ./lib-ts/package.json ./lib/package.json
mv ./lib-ts/README.md ./lib/README.md

# beautify
prettier --loglevel silent --config .prettierrc --write '{lib,lib-ts}/**/*.{ts,js}'; echo Library prettier-ified
prettier --loglevel silent --config .prettierrc --write '{test}/**/*.{ts,js}'; echo Tests prettier-ified

# test
jest




