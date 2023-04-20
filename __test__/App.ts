import { constants, TestCase } from './index';
import { expect } from '@jest/globals';
import { getApplicationApiUsage, getBungieApplications } from '../src/endpoints/App';

export const getApplicationApiUsageTests: TestCase<typeof getApplicationApiUsage>[] = [
  {
    name: 'test get application api usage fails',
    data: [
      {
        applicationId: constants.applicationId
      }
    ],
    promise: {
      failure: e => {
        expect(e.message).toEqual('Please sign-in to continue.');
      }
    }
  }
];

export const getBungieApplicationsTests: TestCase<typeof getBungieApplications>[] = [];
