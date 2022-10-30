#!/bin/sh -ex

# Prepare the library folder
rm -rf ./lib
mkdir -p lib

# Compile the generator into ./build
tsc -p tsconfig.json

# Run the generator to produce js in ./lib
node --experimental-json-modules ./build/generate.js

# Copy files from ./src into ./lib
cp -a src/. lib/



