import { constants } from '../global-setup';
import { expect } from '@jest/globals';
import { getApplicationApiUsage, getBungieApplications } from '../../src/endpoints/App';
import { PlatformErrorCodes } from '../../src/enums/Exceptions/PlatformErrorCodes';
import { EndpointTestSuite } from '../endpoints.test';

export const getApplicationApiUsageTests: EndpointTestSuite<typeof getApplicationApiUsage> = {
  endpoint: getApplicationApiUsage,
  cases: [
    {
      name: 'get application api usage fails',
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
  ]
};

export const getBungieApplicationsTests: EndpointTestSuite<typeof getBungieApplications> = {
  endpoint: getBungieApplications,
  cases: []
};
