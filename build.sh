#!/bin/sh -ex

# Prepare the build folder
rm -rf ./build

# Compile the generator into ./build
tsc -p ./generator/tsconfig.generator.json ; echo Generator compiled to JavaScript with tsc

# beautify
prettier --config .prettierrc './build/**/*.{mjs,ts}' --write
