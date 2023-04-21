import { constants, TestCase } from './global-setup';
import {
  getTrendingCategories,
  getTrendingCategory,
  getTrendingEntryDetail
} from '../src/endpoints/Trending';

export const getTrendingCategoryTests: TestCase<typeof getTrendingCategory>[] = [];
export const getTrendingCategoriesTests: TestCase<typeof getTrendingCategories>[] = [];
export const getTrendingEntryDetailTests: TestCase<typeof getTrendingEntryDetail>[] = [];
