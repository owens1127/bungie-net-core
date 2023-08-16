import { constants, TestCase } from './global-setup';
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
} from '../src/endpoints/Forum';

export const getCoreTopicsPagedTests: TestCase<typeof getCoreTopicsPaged>[] =
  [];
export const getForumTagSuggestionsTests: TestCase<
  typeof getForumTagSuggestions
>[] = [];
export const getPollTests: TestCase<typeof getPoll>[] = [];
export const getPostAndParentTests: TestCase<typeof getPostAndParent>[] = [];
export const getPostAndParentAwaitingApprovalTests: TestCase<
  typeof getPostAndParentAwaitingApproval
>[] = [];
export const getPostsThreadedPagedTests: TestCase<
  typeof getPostsThreadedPaged
>[] = [];
export const getPostsThreadedPagedFromChildTests: TestCase<
  typeof getPostsThreadedPagedFromChild
>[] = [];
export const getRecruitmentThreadSummariesTests: TestCase<
  typeof getRecruitmentThreadSummaries
>[] = [];
export const getTopicForContentTests: TestCase<typeof getTopicForContent>[] =
  [];
export const getTopicsPagedTests: TestCase<typeof getTopicsPaged>[] = [];
