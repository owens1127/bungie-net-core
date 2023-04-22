#!/bin/sh -ex

# Prepare the build folders
rm -rf ./build && mkdir -p build
rm -rf ./__test__/api && mkdir -p __test__/api

# Compile the generator into ./build
tsc -p ./generator/tsconfig.generator.json ; echo Generator compiled to JavaScript with tsc

# beautify
prettier --config .prettierrc './{build,__test__}/**/*.{mjs,ts}' --write
