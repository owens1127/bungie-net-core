import { AllDestinyManifestComponents, DestinyManifestLanguage } from "./index.js";
import { DestinyManifest } from "../schemas/index.js";
export interface GetAllDestinyManifestComponentsParams {
    destinyManifest: DestinyManifest;
    language: DestinyManifestLanguage;
}
/** fetches the enormous combined JSON manifest file */
export declare function getAllDestinyManifestComponents(params: GetAllDestinyManifestComponentsParams): Promise<AllDestinyManifestComponents>;
