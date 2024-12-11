# clean the src folder from files that will be generated
rm -rf ./src/endpoints
rm -rf ./src/models
rm -rf ./src/enums
rm ./src/manifest/types.ts

# Run the generator to produce typescript library in ./src
node --experimental-json-modules ./build/index.mjs && echo Generation complete, Library TypeScript generated

# fix small errors
perl -pi -e 's/readonly item: DestinyItemResponse/readonly item: DestinyItemResponse<["ItemCommonData", "ItemInstances", "ItemObjectives", "ItemPerks",  "ItemReusablePlugs", "ItemSockets", "ItemPlugObjectives"]>/g' ./src/models/Destiny/Responses/DestinyItemChangeResponse.ts
perl -pi -e 's/entityType: string/entityType: T/g' ./src/endpoints/Destiny2.ts

# beautify
prettier --config .prettierrc './src/**/*.ts' --write

# prepare the library folder
rm -rf ./lib && mkdir -p lib

# Transpile the library from TypeScript to .d.ts typings
tsc -p tsconfig.json && echo Typings transpiled

# Transpile the library from TypeScript to JS
babel src --out-dir lib --extensions .ts && echo Javascript transpiled

