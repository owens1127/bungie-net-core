import { TestCase } from './index';
import {
  getActivePrivateClanFireteamCount,
  getAvailableClanFireteams,
  getClanFireteam,
  getMyClanFireteams,
  searchPublicAvailableClanFireteams
} from '../src/endpoints/Fireteam';

export const getActivePrivateClanFireteamCountTests: TestCase<
  typeof getActivePrivateClanFireteamCount
>[] = [];
export const getAvailableClanFireteamsTests: TestCase<typeof getAvailableClanFireteams>[] = [];
export const getClanFireteamTests: TestCase<typeof getClanFireteam>[] = [];
export const getMyClanFireteamsTests: TestCase<typeof getMyClanFireteams>[] = [];
export const searchPublicAvailableClanFireteamsTests: TestCase<
  typeof searchPublicAvailableClanFireteams
>[] = [];
