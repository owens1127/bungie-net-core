import { constants, TestCase } from './global-setup';
import {
  getContentById,
  getContentByTagAndType,
  getContentType,
  rssNewsArticles,
  searchContentByTagAndType,
  searchContentWithText,
  searchHelpArticles
} from '../src/endpoints/Content';

export const getContentByIdTests: TestCase<typeof getContentById>[] = [];
export const getContentByTagAndTypeTests: TestCase<typeof getContentByTagAndType>[] = [];
export const getContentTypeTests: TestCase<typeof getContentType>[] = [];
export const rssNewsArticlesTests: TestCase<typeof rssNewsArticles>[] = [];
export const searchContentByTagAndTypeTests: TestCase<typeof searchContentByTagAndType>[] = [];
export const searchContentWithTextTests: TestCase<typeof searchContentWithText>[] = [];
export const searchHelpArticlesTests: TestCase<typeof searchHelpArticles>[] = [];
