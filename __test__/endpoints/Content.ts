import { EndpointTestSuite } from '../endpoints.test';
import { getContentById, getContentByTagAndType, getContentType, rssNewsArticles, searchContentByTagAndType, searchContentWithText, searchHelpArticles } from '../../src/endpoints/Content';

export const getContentByIdTests: EndpointTestSuite<typeof getContentById>[] = [];
export const getContentByTagAndTypeTests: EndpointTestSuite< typeof getContentByTagAndType> = {
  endpoint: getContentByTagAndType,
  cases: []
};
export const getContentTypeTests: EndpointTestSuite<typeof $1> = {
  endpoint: $1,
  cases: []
};
export const rssNewsArticlesTests: EndpointTestSuite<typeof $1> = {
  endpoint: $1,
  cases: []
};
export const searchContentByTagAndTypeTests: EndpointTestSuite< typeof searchContentByTagAndType> = {
  endpoint: searchContentByTagAndType,
  cases: []
};
export const searchContentWithTextTests: EndpointTestSuite< typeof searchContentWithText> = {
  endpoint: searchContentWithText,
  cases: []
};
export const searchHelpArticlesTests: EndpointTestSuite< typeof searchHelpArticles> = {
  endpoint: searchHelpArticles,
  cases: []
};
