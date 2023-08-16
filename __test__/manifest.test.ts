import { getDestinyManifest } from '../src/endpoints/Destiny2';
import { sharedTestClient } from './global-setup';
import {
  DestinyManifestDefinition,
  getDestinyManifestComponent
} from '../src/manifest';

describe('destiny manifest component', () => {
  jest.setTimeout(15000);
  const tables = [
    'DestinyActivityDefinition',
    'DestinyGuardianRankDefinition',
    'DestinyInventoryItemDefinition'
  ] as const;

  let res: Record<
    string,
    DestinyManifestDefinition<(typeof tables)[number]>
  >[] = [];
  beforeAll(async () => {
    const { Response: destinyManifest } = await getDestinyManifest(
      sharedTestClient
    );
    res = await Promise.all(
      tables.map(table =>
        getDestinyManifestComponent(
          {
            destinyManifest,
            language: 'en',
            tableName: table
          },
          sharedTestClient
        )
      )
    );
  });

  it('is expected to succeed', () => {
    expect(res).not.toBeNull();
  });
  it('is a valid response', () => {
    if (res) {
      expect(res).toHaveProperty('DestinyActivityDefinition');
      expect(res).toHaveProperty('DestinyGuardianRankDefinition');
      expect(res).toHaveProperty('DestinyInventoryItemDefinition');
      expect(res['DestinyActivityDefinition'][119944200]).toHaveProperty(
        'activityTypeHash'
      );
      expect(res['DestinyActivityDefinition'][27283751]).toHaveProperty(
        'displayProperties'
      );
      expect(res['DestinyActivityDefinition'][119944200]).toHaveProperty(
        'pgcrImage'
      );
      expect(res['DestinyGuardianRankDefinition'][1]).toHaveProperty(
        'rankNumber'
      );
      expect(res['DestinyGuardianRankDefinition'][4]).toHaveProperty(
        'displayProperties'
      );
      expect(res['DestinyGuardianRankDefinition'][8]).toHaveProperty(
        'foregroundImagePath'
      );
      expect(res['DestinyInventoryItemDefinition'][3949435]).toHaveProperty(
        'acquireUnlockHash'
      );
      expect(res['DestinyInventoryItemDefinition'][24043435]).toHaveProperty(
        'displayProperties'
      );
      expect(res['DestinyInventoryItemDefinition'][25023897]).toHaveProperty(
        'classType'
      );
    } else {
      throw new Error('No Response');
    }
  });
});
