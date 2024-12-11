import { getDestinyManifest } from '../src/endpoints/Destiny2';
import { sharedTestClient } from './global-setup';
import { DestinyManifestDefinition, getDestinyManifestComponent } from '../src/manifest';

const tables = [
  'DestinyActivityDefinition',
  'DestinyGuardianRankDefinition',
  'DestinyInventoryItemDefinition'
] as const;

let res: {
  [key in (typeof tables)[number]]: Record<string, DestinyManifestDefinition<key>>;
} = {
  DestinyActivityDefinition: {},
  DestinyGuardianRankDefinition: {},
  DestinyInventoryItemDefinition: {}
};

beforeAll(async () => {
  const { Response: destinyManifest } = await getDestinyManifest(sharedTestClient.http);
  res = Object.fromEntries(
    await Promise.all(
      tables.map(async table => [
        table,
        await getDestinyManifestComponent(sharedTestClient.http, {
          destinyManifest,
          language: 'en',
          tableName: table
        })
      ])
    )
  );
});

it('gets a response', () => {
  expect(res).not.toBeNull();
});

describe('is a valid response', () => {
  test('has DestinyActivityDefinition', () => {
    expect(res).toHaveProperty('DestinyActivityDefinition');
  });
  test('has DestinyGuardianRankDefinition', () => {
    expect(res).toHaveProperty('DestinyActivityDefinition');
  });
  test('has DestinyInventoryItemDefinition', () => {
    expect(res).toHaveProperty('DestinyActivityDefinition');
  });
});

describe('the tables are correct', () => {
  test('DestinyActivityDefinition has the right shape', () => {
    expect(res['DestinyActivityDefinition'][119944200]).toHaveProperty('activityTypeHash');
    expect(res['DestinyActivityDefinition'][27283751]).toHaveProperty('displayProperties');
    expect(res['DestinyActivityDefinition'][119944200]).toHaveProperty('pgcrImage');
  });

  test('DestinyGuardianRankDefinition has the right shape', () => {
    expect(res['DestinyGuardianRankDefinition'][1]).toHaveProperty('rankNumber');
    expect(res['DestinyGuardianRankDefinition'][4]).toHaveProperty('displayProperties');
    expect(res['DestinyGuardianRankDefinition'][8]).toHaveProperty('foregroundImagePath');
  });

  test('DestinyInventoryItemDefinition has the right shape', () => {
    expect(res['DestinyInventoryItemDefinition'][3949435]).toHaveProperty('acquireUnlockHash');
    expect(res['DestinyInventoryItemDefinition'][24043435]).toHaveProperty('displayProperties');
    expect(res['DestinyInventoryItemDefinition'][25023897]).toHaveProperty('classType');
  });
});
