import { constants, TestCase } from './global-setup';
import {
  getAvailableLocales,
  getCommonSettings,
  getGlobalAlerts,
  getUserSystemOverrides
} from '../src/endpoints/Core';

export const getAvailableLocalesTests: TestCase<typeof getAvailableLocales>[] = [];
export const getCommonSettingsTests: TestCase<typeof getCommonSettings>[] = [];
export const getGlobalAlertsTests: TestCase<typeof getGlobalAlerts>[] = [];
export const getUserSystemOverridesTests: TestCase<typeof getUserSystemOverrides>[] = [];
