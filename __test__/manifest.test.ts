import { getDestinyManifest } from '../src/endpoints/Destiny2';
import {
  DestinyManifestDefinition,
  getAllDestinyManifestComponents,
  getDestinyManifestComponent,
  getDestinyManifestSlice
} from '../src/manifest';
import {
  AllManifestComponents,
  DestinyManifestSlice,
  ManifestComponent
} from '../src/manifest/manifest-types';
import { DestinyActivityDefinition } from '../src/models';
import { sharedTestClient } from './global-setup';

describe('destiny manifest component', () => {
  const tables = [
    DestinyManifestDefinition.DestinyActivityDefinition,
    DestinyManifestDefinition.DestinyGuardianRankDefinition,
    DestinyManifestDefinition.DestinyInventoryItemDefinition
  ] as const;
  let res: DestinyManifestSlice<typeof tables> | null = null;

  beforeAll(async () => {
    const { Response: destinyManifest } = await getDestinyManifest(
      sharedTestClient
    );
    res = await getDestinyManifestSlice({
      destinyManifest,
      language: 'en',
      tableNames: tables
    });
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

describe('entire destiny manifest', () => {
  let res: AllManifestComponents | null = null;

  beforeAll(async () => {
    const { Response: destinyManifest } = await getDestinyManifest(
      sharedTestClient
    );
    res = await getAllDestinyManifestComponents({
      destinyManifest,
      language: 'en'
    });
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
  }, 15000);
});
describe('destiny manifest slice', () => {
  let res: ManifestComponent<DestinyActivityDefinition> | null = null;

  beforeAll(async () => {
    const { Response: destinyManifest } = await getDestinyManifest(
      sharedTestClient
    );
    res = await getDestinyManifestComponent({
      destinyManifest,
      language: 'en',
      tableName: DestinyManifestDefinition.DestinyActivityDefinition
    });
  });

  it('is expected to succeed', () => {
    expect(res).not.toBeNull();
  });
  it('is a valid response', () => {
    if (res) {
      expect(res).toHaveProperty('1661734046');
      expect(res['1661734046']).toHaveProperty('activityTypeHash');
      expect(res['1661734046']).toHaveProperty('displayProperties');
      expect(res['1661734046']).toHaveProperty('pgcrImage');
    } else {
      throw new Error('No Response');
    }
  }, 10000);
});
