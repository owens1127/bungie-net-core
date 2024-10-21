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

import { BungieClientProtocol } from './..';
import { BungieNetResponse } from '../interfaces/BungieNetResponse';
import { ContentTypeDescription } from '../models/Content/Models/ContentTypeDescription';
import { addParam } from '../util';
import { ContentItemPublicContract } from '../models/Content/ContentItemPublicContract';
import { SearchResultOfContentItemPublicContract } from '../models/SearchResultOfContentItemPublicContract';
import { NewsArticleRssResponse } from '../models/Content/NewsArticleRssResponse';

/**
 * Gets an object describing a particular variant of content.
 * @see {@link https://bungie-net.github.io/#Content.GetContentType}
 */
export async function getContentType(
  client: BungieClientProtocol,
  params: {
    type: string;
  }
): Promise<BungieNetResponse<ContentTypeDescription>> {
  const url = new URL(`https://www.bungie.net/Platform/Content/GetContentType/${params.type}/`);
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a content item referenced by id
 * @see {@link https://bungie-net.github.io/#Content.GetContentById}
 */
export async function getContentById(
  client: BungieClientProtocol,
  params: {
    /** false */
    head?: boolean;
    id: string;
    locale: string;
  }
): Promise<BungieNetResponse<ContentItemPublicContract>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Content/GetContentById/${params.id}/${params.locale}/`
  );
  addParam(url, params.head, 'head');
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns the newest item that matches a given tag and Content Type.
 * @see {@link https://bungie-net.github.io/#Content.GetContentByTagAndType}
 */
export async function getContentByTagAndType(
  client: BungieClientProtocol,
  params: {
    /** Not used. */
    head?: boolean;
    locale: string;
    tag: string;
    type: string;
  }
): Promise<BungieNetResponse<ContentItemPublicContract>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Content/GetContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`
  );
  addParam(url, params.head, 'head');
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets content based on querystring information passed in. Provides basic search
 * and text search capabilities.
 * @see {@link https://bungie-net.github.io/#Content.SearchContentWithText}
 */
export async function searchContentWithText(
  client: BungieClientProtocol,
  params: {
    /** Content type tag: Help, News, etc. Supply multiple ctypes separated by space. */
    ctype?: string;
    /** Page number for the search results, starting with page 1. */
    currentpage?: number;
    /** Not used. */
    head?: boolean;
    locale: string;
    /** Word or phrase for the search. */
    searchtext?: string;
    /** For analytics, hint at the part of the app that triggered the search. Optional. */
    source?: string;
    /** Tag used on the content to be searched. */
    tag?: string;
  }
): Promise<BungieNetResponse<SearchResultOfContentItemPublicContract>> {
  const url = new URL(`https://www.bungie.net/Platform/Content/Search/${params.locale}/`);
  addParam(url, params.ctype, 'ctype');
  addParam(url, params.currentpage, 'currentpage');
  addParam(url, params.head, 'head');
  addParam(url, params.searchtext, 'searchtext');
  addParam(url, params.source, 'source');
  addParam(url, params.tag, 'tag');
  return client.fetch({ method: 'GET', url });
}

/**
 * Searches for Content Items that match the given Tag and Content Type.
 * @see {@link https://bungie-net.github.io/#Content.SearchContentByTagAndType}
 */
export async function searchContentByTagAndType(
  client: BungieClientProtocol,
  params: {
    /** Page number for the search results starting with page 1. */
    currentpage?: number;
    /** Not used. */
    head?: boolean;
    /** Not used. */
    itemsperpage?: number;
    locale: string;
    tag: string;
    type: string;
  }
): Promise<BungieNetResponse<SearchResultOfContentItemPublicContract>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Content/SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`
  );
  addParam(url, params.currentpage, 'currentpage');
  addParam(url, params.head, 'head');
  addParam(url, params.itemsperpage, 'itemsperpage');
  return client.fetch({ method: 'GET', url });
}

/**
 * Search for Help Articles.
 * @see {@link https://bungie-net.github.io/#Content.SearchHelpArticles}
 */
export async function searchHelpArticles(
  client: BungieClientProtocol,
  params: {
    searchtext: string;
    size: string;
  }
): Promise<BungieNetResponse<object>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Content/SearchHelpArticles/${params.searchtext}/${params.size}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a JSON string response that is the RSS feed for news articles.
 * @see {@link https://bungie-net.github.io/#Content.RssNewsArticles}
 */
export async function rssNewsArticles(
  client: BungieClientProtocol,
  params: {
    /** Optionally filter response to only include news items in a certain category. */
    categoryfilter?: string;
    /** Optionally include full content body for each news item. */
    includebody?: boolean;
    /** Zero-based pagination token for paging through result sets. */
    pageToken: string;
  }
): Promise<BungieNetResponse<NewsArticleRssResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Content/Rss/NewsArticles/${params.pageToken}/`
  );
  addParam(url, params.categoryfilter, 'categoryfilter');
  addParam(url, params.includebody, 'includebody');
  return client.fetch({ method: 'GET', url });
}
