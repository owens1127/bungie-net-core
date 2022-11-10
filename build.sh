#!/bin/sh -ex

# Prepare the library folder(s)
rm -rf ./lib-ts && mkdir -p lib-ts
rm -rf ./lib && mkdir -p lib

# Copy files from ./src into ./lib-ts
cp -a src/. lib-ts/

# remove extra files
rm lib-ts/lib-package.json

# Compile the generator into ./build
tsc -p tsconfig.json

# Run the generator to produce js in ./lib-ts
node --experimental-json-modules ./build/generate.js




