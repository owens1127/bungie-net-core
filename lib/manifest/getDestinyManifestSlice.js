var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getDestinyManifestComponent } from './';
/**
 * this returns a similar structure to getAllDestinyManifestComponents (the big manifest json)
 * but only specific components within. it bundles multiple single tables requests,
 * into a single properly typed object with keys named after manifest components
 *
 * i.e. `{ DestinyInventoryItemDefinition: etc...,
 * DestinyObjectiveDefinition: etc... }`
 *
 * due to typescript limitations, the array of tableNames needs to be recognized by
 * typescript as readonly (not mutable between inception and going into the function),
 * so that it considers them table names and not just strings.
 *
 * like `['DestinyInventoryItemDefinition' as const]`
 *
 * or maybe `['DestinyInventoryItemDefinition'] as const`
 *
 * or just feed in into the function hardcoded like
 *
 * `function(['DestinyInventoryItemDefinition'])`
 */
export function getDestinyManifestSlice(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const downloadedTables = yield Promise.all(params.tableNames.map((tableName) => __awaiter(this, void 0, void 0, function* () {
            const tableContent = yield getDestinyManifestComponent({
                destinyManifest: params.destinyManifest,
                tableName,
                language: params.language
            });
            return { tableName, tableContent };
        })));
        const manifestSlice = {};
        for (const downloadedTable of downloadedTables) {
            manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent;
        }
        return manifestSlice;
    });
}
