import { constants, TestCase } from './global-setup';
import {
  applyMissingPartnerOffersWithoutClaim,
  claimPartnerOffer,
  forceDropsRepair,
  getBungieRewardsForPlatformUser,
  getBungieRewardsForUser,
  getBungieRewardsList,
  getPartnerOfferSkuHistory,
  getPartnerRewardHistory
} from '../src/endpoints/Tokens';

export const applyMissingPartnerOffersWithoutClaimTests: TestCase<
  typeof applyMissingPartnerOffersWithoutClaim
>[] = [];
export const claimPartnerOfferTests: TestCase<typeof claimPartnerOffer>[] = [];
export const forceDropsRepairTests: TestCase<typeof forceDropsRepair>[] = [];
export const getBungieRewardsForPlatformUserTests: TestCase<
  typeof getBungieRewardsForPlatformUser
>[] = [];
export const getBungieRewardsForUserTests: TestCase<typeof getBungieRewardsForUser>[] = [];
export const getBungieRewardsListTests: TestCase<typeof getBungieRewardsList>[] = [];
export const getPartnerOfferSkuHistoryTests: TestCase<typeof getPartnerOfferSkuHistory>[] = [];
export const getPartnerRewardHistoryTests: TestCase<typeof getPartnerRewardHistory>[] = [];
