import { EndpointTestSuite } from '../endpoints.test';
import { getCommunityContent } from '../../src/endpoints/CommunityContent';

export const getCommunityContentTests: EndpointTestSuite<typeof getCommunityContent> = {
  endpoint: getCommunityContent,
  cases: []
};
