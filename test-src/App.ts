import { constants, TestCase } from './index';
import {
  BungieMembershipType,
  DestinyComponentType,
} from '../lib-ts/schemas';

import { expect } from '@jest/globals';
import { getApplicationApiUsage } from '../lib-ts/endpoints/App';

export const getApplicationApiUsageTest: TestCase<typeof getApplicationApiUsage>[] = [{
  name: "test get application api usage fails",
  params: {
    applicationId: constants.applicationId
  },
  promise: {
    success: (res) => (
      expect(res).toBe(null)),
    failure: (e) => {
      expect(e.message).toEqual("Please sign-in to continue.");
    }
  }
}
]