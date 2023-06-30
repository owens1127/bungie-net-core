# clean the src folder from files that will be generated
rm -rf ./src/endpoints
rm -rf ./src/models
rm -rf ./__test__/__api__
rm ./src/manifest/manifest-types.ts

# Run the generator to produce typescript library in ./src
node --experimental-json-modules ./build/generate.mjs ; echo Generation complete, Library TypeScript generated

# fix one small error
perl -pi -e 's/item: DestinyItemResponse/item: DestinyItemResponse<any>/g' ./src/models/Destiny/Responses/DestinyItemChangeResponse.ts

# prepare the library folder
rm -rf ./lib && mkdir -p lib

# Transpile the library from TypeScript to .d.ts typings
tsc -p tsconfig.json ; echo Typings transpiled

# Transpile the library from TypeScript to JS
babel src --out-dir lib --extensions .ts ; echo Javascript transpiled

# remove "empty" files
find ./lib -type f -exec sh -c 'test $(wc -l < "{}") -lt 2 && rm -f "{}"' \; ; echo Empty files removed

# beautify
prettier --config .prettierrc './{src/**/*,__test__/*}.ts' --write

# copy license
cp ./bungie-api-LICENSE ./lib/bungie-api-LICENSE