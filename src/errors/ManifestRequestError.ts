import { GetAllDestinyManifestComponentsParams } from '../manifest/getAllDestinyManifestComponents';

export class ManifestRequestError extends Error {
  readonly params: GetAllDestinyManifestComponentsParams;
  readonly response: any;
  constructor(
    message: string,
    params: GetAllDestinyManifestComponentsParams,
    response: any
  ) {
    super(message);
    this.params = params;
    this.response = response;
    this.name = 'BungieManifestRequestError';
  }
}
