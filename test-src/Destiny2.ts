import { constants, TestCase } from './index';
import {
  BungieMembershipType,
  DestinyComponentType,
} from '../lib-ts/schemas';

import {
  getDestinyEntityDefinition,
  getDestinyManifest,
  getProfile
} from '../lib-ts/endpoints/Destiny2'
import { expect } from '@jest/globals';
import exp = require('constants');

export const getDestinyManifestTest: TestCase<typeof getDestinyManifest>[] = [{
  name: "get destiny manifest",
  promise: {
    success: (res) => {
      expect(res.ErrorCode).toEqual(1)
      expect(res.Response).toHaveProperty('version')
      expect(res.Response).toHaveProperty('jsonWorldContentPaths')
    },
    failure: (e) => {
      expect(e).toBe(null);
    }
  }
}]

export const getDestinyEntityDefinitionTest: TestCase<typeof getDestinyEntityDefinition>[] = [{
  name: "get destiny entity definition",
  params: {
    entityType: "DestinyInventoryItemDefinition",
    hashIdentifier: constants.gjallarhornHash
  },
  promise: {
    success: (res) => {
      expect(res.ErrorCode).toEqual(1)
      expect(res.Response).toHaveProperty('hash')
      expect(res.Response).toHaveProperty('index')
      expect(res.Response).toHaveProperty('redacted')
    },
    failure: (e) => {
      expect(e).toBe(null);
    }
  }
}]

export const getProfileTest: TestCase<typeof getProfile>[] = [{
  name: "test get profile",
  params: {
    components: [DestinyComponentType.Profiles],
    destinyMembershipId: constants.membershipId,
    membershipType: BungieMembershipType.TigerSteam
  },
  promise: {
    success: (res) => (
      expect(res.ErrorCode).toEqual(1)),
    failure: (e) => {
      expect(e).toBe(null);
    }
  }
},
  {
    name: "test bad profile",
    params: {
      components: [DestinyComponentType.Profiles],
      destinyMembershipId: constants.membershipId + "agyfgajf",
      membershipType: BungieMembershipType.TigerSteam
    },
    promise: {
      success: (res) => (
        expect(res.Response).toBe(null)),
      failure: (e) => {
        expect(e.message).toBe("Unable to parse your parameters.  Please correct them, and try again.");
      }
    }
  }
]