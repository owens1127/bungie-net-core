import { EndpointTestSuite } from '../endpoints.test';
import { getTrendingCategories, getTrendingCategory, getTrendingEntryDetail } from '../../src/endpoints/Trending';

export const getTrendingCategoryTests: EndpointTestSuite<typeof getTrendingCategory> = {
  endpoint: getTrendingCategory,
  cases: []
};
export const getTrendingCategoriesTests: EndpointTestSuite<typeof getTrendingCategories> = {
  endpoint: getTrendingCategories,
  cases: []
};
export const getTrendingEntryDetailTests: EndpointTestSuite<typeof getTrendingEntryDetail> = {
  endpoint: getTrendingEntryDetail,
  cases: []
};
