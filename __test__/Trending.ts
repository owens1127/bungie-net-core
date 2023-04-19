import {
  getTrendingCategories,
  getTrendingCategory,
  getTrendingEntryDetail
} from '../src/endpoints/Trending';
import { TestCase } from './index';

export const getTrendingCategoryTests: TestCase<typeof getTrendingCategory>[] = [];
export const getTrendingCategoriesTests: TestCase<typeof getTrendingCategories>[] = [];
export const getTrendingEntryDetailTests: TestCase<typeof getTrendingEntryDetail>[] = [];
