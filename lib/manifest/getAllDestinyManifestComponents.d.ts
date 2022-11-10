import { AllDestinyManifestComponents, DestinyManifestLanguage } from "./index";
import { DestinyManifest } from "../schemas";
export interface GetAllDestinyManifestComponentsParams {
    destinyManifest: DestinyManifest;
    language: DestinyManifestLanguage;
}
/** fetches the enormous combined JSON manifest file */
export declare function getAllDestinyManifestComponents(params: GetAllDestinyManifestComponentsParams): Promise<AllDestinyManifestComponents>;
