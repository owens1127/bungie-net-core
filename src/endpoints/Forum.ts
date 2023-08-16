/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { ForumTopicsCategoryFiltersEnum } from '../enums/Forum/ForumTopicsCategoryFiltersEnum';
import { ForumTopicsQuickDateEnum } from '../enums/Forum/ForumTopicsQuickDateEnum';
import { ForumTopicsSortEnum } from '../enums/Forum/ForumTopicsSortEnum';
import { BungieClientProtocol } from './..';
import { BungieNetResponse } from '../interfaces/BungieNetResponse';
import { addParam } from '../util';
import { PostSearchResponse } from '../models/Forum/PostSearchResponse';
import { ForumPostSortEnum } from '../enums/Forum/ForumPostSortEnum';
import { TagResponse } from '../models/Tags/Models/Contracts/TagResponse';
import { ForumRecruitmentDetail } from '../models/Forum/ForumRecruitmentDetail';

/**
 * Get topics from any forum.
 * @see {@link https://bungie-net.github.io/#Forum.GetTopicsPaged}
 */
export async function getTopicsPaged(
  client: BungieClientProtocol,
  params: {
    /** A category filter */
    categoryFilter: ForumTopicsCategoryFiltersEnum;
    /** The group, if any. */
    group: string;
    /**
     * Comma seperated list of locales posts must match to return in the result list.
     * Default 'en'
     */
    locales?: string;
    /** Zero paged page number */
    page: number;
    /** Unused */
    pageSize: number;
    /** A date filter. */
    quickDate: ForumTopicsQuickDateEnum;
    /** The sort mode. */
    sort: ForumTopicsSortEnum;
    /** The tags to search, if any. */
    tagstring?: string;
  }
): Promise<BungieNetResponse<PostSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Forum/GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`
  );
  addParam(url, params.locales, 'locales');
  addParam(url, params.tagstring, 'tagstring');
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets a listing of all topics marked as part of the core group.
 * @see {@link https://bungie-net.github.io/#Forum.GetCoreTopicsPaged}
 */
export async function getCoreTopicsPaged(
  client: BungieClientProtocol,
  params: {
    /** The category filter. */
    categoryFilter: ForumTopicsCategoryFiltersEnum;
    /**
     * Comma seperated list of locales posts must match to return in the result list.
     * Default 'en'
     */
    locales?: string;
    /** Zero base page */
    page: number;
    /** The date filter. */
    quickDate: ForumTopicsQuickDateEnum;
    /** The sort mode. */
    sort: ForumTopicsSortEnum;
  }
): Promise<BungieNetResponse<PostSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Forum/GetCoreTopicsPaged/${params.page}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`
  );
  addParam(url, params.locales, 'locales');
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a thread of posts at the given parent, optionally returning replies to
 * those posts as well as the original parent.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostsThreadedPaged}
 */
export async function getPostsThreadedPaged(
  client: BungieClientProtocol,
  params: {
    getParentPost: boolean;
    page: number;
    pageSize: number;
    parentPostId: string;
    replySize: number;
    rootThreadMode: boolean;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
    sortMode: ForumPostSortEnum;
  }
): Promise<BungieNetResponse<PostSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`
  );
  addParam(url, params.showbanned, 'showbanned');
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a thread of posts starting at the topicId of the input childPostId,
 * optionally returning replies to those posts as well as the original parent.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostsThreadedPagedFromChild}
 */
export async function getPostsThreadedPagedFromChild(
  client: BungieClientProtocol,
  params: {
    childPostId: string;
    page: number;
    pageSize: number;
    replySize: number;
    rootThreadMode: boolean;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
    sortMode: ForumPostSortEnum;
  }
): Promise<BungieNetResponse<PostSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Forum/GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`
  );
  addParam(url, params.showbanned, 'showbanned');
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns the post specified and its immediate parent.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostAndParent}
 */
export async function getPostAndParent(
  client: BungieClientProtocol,
  params: {
    childPostId: string;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
  }
): Promise<BungieNetResponse<PostSearchResponse>> {
  const url = new URL(`https://www.bungie.net/Platform/Forum/GetPostAndParent/${params.childPostId}/`);
  addParam(url, params.showbanned, 'showbanned');
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns the post specified and its immediate parent of posts that are awaiting
 * approval.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostAndParentAwaitingApproval}
 */
export async function getPostAndParentAwaitingApproval(
  client: BungieClientProtocol,
  params: {
    childPostId: string;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
  }
): Promise<BungieNetResponse<PostSearchResponse>> {
  const url = new URL(`https://www.bungie.net/Platform/Forum/GetPostAndParentAwaitingApproval/${params.childPostId}/`);
  addParam(url, params.showbanned, 'showbanned');
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets the post Id for the given content item's comments, if it exists.
 * @see {@link https://bungie-net.github.io/#Forum.GetTopicForContent}
 */
export async function getTopicForContent(
  client: BungieClientProtocol,
  params: {
    contentId: string;
  }
): Promise<BungieNetResponse<string>> {
  const url = new URL(`https://www.bungie.net/Platform/Forum/GetTopicForContent/${params.contentId}/`);
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets tag suggestions based on partial text entry, matching them with other tags
 * previously used in the forums.
 * @see {@link https://bungie-net.github.io/#Forum.GetForumTagSuggestions}
 */
export async function getForumTagSuggestions(
  client: BungieClientProtocol,
  params: {
    /** The partial tag input to generate suggestions from. */
    partialtag?: string;
  }
): Promise<BungieNetResponse<TagResponse[]>> {
  const url = new URL(`https://www.bungie.net/Platform/Forum/GetForumTagSuggestions/`);
  addParam(url, params.partialtag, 'partialtag');
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets the specified forum poll.
 * @see {@link https://bungie-net.github.io/#Forum.GetPoll}
 */
export async function getPoll(
  client: BungieClientProtocol,
  params: {
    /** The post id of the topic that has the poll. */
    topicId: string;
  }
): Promise<BungieNetResponse<PostSearchResponse>> {
  const url = new URL(`https://www.bungie.net/Platform/Forum/Poll/${params.topicId}/`);
  return client.fetch({ method: 'GET', url });
}

/**
 * Allows the caller to get a list of to 25 recruitment thread summary information
 * objects.
 * @see {@link https://bungie-net.github.io/#Forum.GetRecruitmentThreadSummaries}
 */
export async function getRecruitmentThreadSummaries(
  client: BungieClientProtocol,
  body: string[]
): Promise<BungieNetResponse<ForumRecruitmentDetail[]>> {
  const url = new URL(`https://www.bungie.net/Platform/Forum/Recruit/Summaries/`);
  return client.fetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
}
