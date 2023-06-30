/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { DestinyMilestoneContent } from '../../models';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetPublicMilestoneContent} */
export type GetPublicMilestoneContentParams = {
  /** The identifier for the milestone to be returned. */
  milestoneHash: number;
};

/**
 * Gets custom localized content for the milestone of the given hash, if it exists.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetPublicMilestoneContent}
 */
export async function getPublicMilestoneContent(
  params: GetPublicMilestoneContentParams,
  client: BungieClientProtocol
): Promise<BungieNetResponse<DestinyMilestoneContent>> {
  return client.fetch<DestinyMilestoneContent>({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Milestones/${params.milestoneHash}/Content/`
  });
}
