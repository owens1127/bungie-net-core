import { EndpointTestSuite } from '../endpoints.test';
import {
  getActivePrivateClanFireteamCount,
  getAvailableClanFireteams,
  getClanFireteam,
  getMyClanFireteams,
  searchPublicAvailableClanFireteams
} from '../../src/endpoints/Fireteam';

export const getActivePrivateClanFireteamCountTests: EndpointTestSuite<
  typeof getActivePrivateClanFireteamCount
> = {
  endpoint: getActivePrivateClanFireteamCount,
  cases: []
};
export const getAvailableClanFireteamsTests: EndpointTestSuite<
  typeof getAvailableClanFireteams
> = {
  endpoint: getAvailableClanFireteams,
  cases: []
};
export const getClanFireteamTests: EndpointTestSuite<typeof getClanFireteam> = {
  endpoint: getClanFireteam,
  cases: []
};
export const getMyClanFireteamsTests: EndpointTestSuite<
  typeof getMyClanFireteams
> = {
  endpoint: getMyClanFireteams,
  cases: []
};
export const searchPublicAvailableClanFireteamsTests: EndpointTestSuite<
  typeof searchPublicAvailableClanFireteams
> = {
  endpoint: searchPublicAvailableClanFireteams,
  cases: []
};
