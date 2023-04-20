# clean the src folder from files that will be generated
rm -rf ./src/endpoints
rm -rf ./src/schemas
rm ./src/manifest/manifest-types.ts
rm ./src/util/client.ts

# Run the generator to produce typescript library in ./src
node --experimental-json-modules ./build/generate.js ; echo Generation complete, Library TypeScript generated

# fix one small error
perl -pi -e 's/item: DestinyItemResponse/item: DestinyItemResponse<any>/g' ./src/schemas/Destiny/Responses/DestinyItemChangeResponse.ts

# prepare the library folder
rm -rf ./lib && mkdir -p lib

# Transpile the library from TypeScript to .d.ts typings
tsc -p tsconfig.lib.json ; echo Typings transpiled

# Transpile the library from TypeScript to JS
babel src --out-dir lib --extensions .ts ; echo Javascript transpiled

# remove "empty" files
find ./lib -type f -exec sh -c 'test $(wc -l < "{}") -lt 2 && rm -f "{}"' \; ; echo Empty files removed

# beautify
prettier --config .prettierrc './src/**/*.ts' --write

# copy license
cp ./bungie-api-LICENSE ./lib/bungie-api-LICENSE