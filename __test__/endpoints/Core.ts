import { EndpointTestSuite } from '../endpoints.test';
import {
  getAvailableLocales,
  getCommonSettings,
  getGlobalAlerts,
  getUserSystemOverrides
} from '../../src/endpoints/Core';

export const getAvailableLocalesTests: EndpointTestSuite<typeof getAvailableLocales> = {
  endpoint: getAvailableLocales,
  cases: []
};
export const getCommonSettingsTests: EndpointTestSuite<typeof getCommonSettings> = {
  endpoint: getCommonSettings,
  cases: []
};
export const getGlobalAlertsTests: EndpointTestSuite<typeof getGlobalAlerts> = {
  endpoint: getGlobalAlerts,
  cases: []
};
export const getUserSystemOverridesTests: EndpointTestSuite<typeof getUserSystemOverrides> = {
  endpoint: getUserSystemOverrides,
  cases: []
};
