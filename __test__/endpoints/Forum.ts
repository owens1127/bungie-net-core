import { EndpointTestSuite } from '../endpoints.test';
import {
  getCoreTopicsPaged,
  getForumTagSuggestions,
  getPoll,
  getPostAndParent,
  getPostAndParentAwaitingApproval,
  getPostsThreadedPaged,
  getPostsThreadedPagedFromChild,
  getRecruitmentThreadSummaries,
  getTopicForContent,
  getTopicsPaged
} from '../../src/endpoints/Forum';

export const getCoreTopicsPagedTests: EndpointTestSuite<typeof getCoreTopicsPaged> = {
  endpoint: getCoreTopicsPaged,
  cases: []
};
export const getForumTagSuggestionsTests: EndpointTestSuite<typeof getForumTagSuggestions> = {
  endpoint: getForumTagSuggestions,
  cases: []
};
export const getPollTests: EndpointTestSuite<typeof $1> = {
  endpoint: $1,
  cases: []
};
export const getPostAndParentTests: EndpointTestSuite<typeof $1> = {
  endpoint: $1,
  cases: []
};
export const getPostAndParentAwaitingApprovalTests: EndpointTestSuite<typeof getPostAndParentAwaitingApproval> = {
  endpoint: getPostAndParentAwaitingApproval,
  cases: []
};
export const getPostsThreadedPagedTests: EndpointTestSuite<typeof getPostsThreadedPaged> = {
  endpoint: getPostsThreadedPaged,
  cases: []
};
export const getPostsThreadedPagedFromChildTests: EndpointTestSuite<typeof getPostsThreadedPagedFromChild> = {
  endpoint: getPostsThreadedPagedFromChild,
  cases: []
};
export const getRecruitmentThreadSummariesTests: EndpointTestSuite<typeof getRecruitmentThreadSummaries> = {
  endpoint: getRecruitmentThreadSummaries,
  cases: []
};
export const getTopicForContentTests: EndpointTestSuite<typeof getTopicForContent> = {
  endpoint: getTopicForContent,
  cases: []
};
export const getTopicsPagedTests: EndpointTestSuite<typeof $1> = {
  endpoint: $1,
  cases: []
};
