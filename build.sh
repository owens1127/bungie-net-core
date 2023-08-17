#!/bin/sh -ex

# beautify
prettier --config .prettierrc './generator/**/*.mts' --write

# Prepare the build folder
rm -rf ./build

# Compile the generator into ./build
tsc -p ./generator/tsconfig.generator.json ; echo Generator compiled to JavaScript with tsc
