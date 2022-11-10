#!/bin/sh -ex

# Prepare the library folder(s)
rm -rf ./build && mkdir -p build
rm -rf ./lib-ts && mkdir -p lib-ts
rm -rf ./lib && mkdir -p lib

# Copy files from ./src into ./lib-ts
cp -a src/. lib-ts/

# remove extra files
rm lib-ts/lib-package.json

# Compile the generator into ./build
tsc -p tsconfig-generator.json ; echo Generator compiled with tsc

# Run the generator to produce js in ./lib-ts
node --experimental-json-modules ./build/generate.js ; echo Typings generated

# compile typescript into js using babel
babel lib-ts --out-dir lib --extensions ".ts" --presets @babel/preset-typescript

# compile the typings to .d.ts files using tsc
tsc -p tsconfig-lib.json ; echo Typings compiled with tsc

#remove empty js files
count=0
find ./lib -type f |
(echo 'Cleaned' &&
while
  read file;
do
  value=$(cat "$file")
  # if there are only typings in a file, tsc will leave a blank file as such
  if [ "$value" = "export {};" ]
  then
    rm "$file"
    count=$((count+1))
    echo $count
  fi
done | tail -n 1 &&
echo 'empty files') | tr '\n' " " | sed 's/ $/\n/'




