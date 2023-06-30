import { constants, TestCase } from './global-setup';
import { expect } from '@jest/globals';
import {
  getApplicationApiUsage,
  getBungieApplications
} from '../src/endpoints/App';
import { PlatformErrorCodes } from '../src/models';

export const getApplicationApiUsageTests: TestCase<
  typeof getApplicationApiUsage
>[] = [
  {
    name: 'test get application api usage fails',
    data: [
      {
        applicationId: constants.applicationId
      }
    ],
    promise: {
      failure: e => {
        expect(e.ErrorCode).toEqual(PlatformErrorCodes.WebAuthRequired);
        expect(e.Message).toEqual('Please sign-in to continue.');
      }
    }
  }
];

export const getBungieApplicationsTests: TestCase<
  typeof getBungieApplications
>[] = [];
