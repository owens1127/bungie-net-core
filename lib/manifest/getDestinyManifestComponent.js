var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { manifestRequest as http } from '../util/http/rate-limiter';
/**
 * this fetches and returns a single table (Component) from the d2 manifest
 * i.e. DestinyInventoryItemDefinition / DestinyObjectiveDefinition /
 * DestinyVendorDefinition / DestinySeasonDefinition / etc.
 *
 * due to typescript limitations, the table name needs to be recognized by
 * typescript as a const (not mutable between inception and going into the function),
 * so that it considers it a table name and not just a string.
 *
 * this is easy with a string, since
 *
 * `const x = 'thing';` is type `'thing'`, not type `string`,
 *
 * but make sure it's not a `let x =` or a dynamically set string.
 */
export function getDestinyManifestComponent(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const r = {
            method: 'GET',
            url: 'https://www.bungie.net' +
                params.destinyManifest.jsonWorldComponentContentPaths[params.language][params.tableName]
        };
        try {
            return yield http(r);
        }
        catch (e) {
            r.url += '?retry';
            try {
                return yield http(r);
            }
            catch (_a) {
                throw e;
            }
        }
    });
}
