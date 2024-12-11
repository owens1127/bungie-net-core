import { EndpointTestSuite } from '../endpoints.test';
import {
  applyMissingPartnerOffersWithoutClaim,
  claimPartnerOffer,
  forceDropsRepair,
  getBungieRewardsForPlatformUser,
  getBungieRewardsForUser,
  getBungieRewardsList,
  getPartnerOfferSkuHistory,
  getPartnerRewardHistory
} from '../../src/endpoints/Tokens';

export const applyMissingPartnerOffersWithoutClaimTests: EndpointTestSuite<
  typeof applyMissingPartnerOffersWithoutClaim
> = {
  endpoint: applyMissingPartnerOffersWithoutClaim,
  cases: []
};
export const claimPartnerOfferTests: EndpointTestSuite<typeof claimPartnerOffer> = {
  endpoint: claimPartnerOffer,
  cases: []
};
export const forceDropsRepairTests: EndpointTestSuite<typeof forceDropsRepair> = {
  endpoint: forceDropsRepair,
  cases: []
};
export const getBungieRewardsForPlatformUserTests: EndpointTestSuite<typeof getBungieRewardsForPlatformUser> = {
  endpoint: getBungieRewardsForPlatformUser,
  cases: []
};
export const getBungieRewardsForUserTests: EndpointTestSuite<typeof getBungieRewardsForUser> = {
  endpoint: getBungieRewardsForUser,
  cases: []
};
export const getBungieRewardsListTests: EndpointTestSuite<typeof getBungieRewardsList> = {
  endpoint: getBungieRewardsList,
  cases: []
};
export const getPartnerOfferSkuHistoryTests: EndpointTestSuite<typeof getPartnerOfferSkuHistory> = {
  endpoint: getPartnerOfferSkuHistory,
  cases: []
};
export const getPartnerRewardHistoryTests: EndpointTestSuite<typeof getPartnerRewardHistory> = {
  endpoint: getPartnerRewardHistory,
  cases: []
};
