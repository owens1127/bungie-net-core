import type {
  AllManifestComponents as AllDestinyManifestComponents,
  ManifestLanguage as DestinyManifestLanguage
} from './types';
export { getManifestComponentJSON as getDestinyManifestComponent } from './getManifestComponent';
export type { AllDestinyManifestComponents, DestinyManifestLanguage };
export type DestinyManifestComponent = keyof AllDestinyManifestComponents;
export type DestinyManifestDefinition<T extends DestinyManifestComponent> =
  AllDestinyManifestComponents[T];
