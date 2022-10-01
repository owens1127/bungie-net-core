import { getLinkedProfiles } from 'bungie-api-typedef/endpoints/Destiny2';
import { BungieMembershipType } from 'bungie-api-typedef/schemas'
import { BungieProfileManager } from '../managers/BungieProfileManager.js';
import { DestinyProfileManager } from '../managers/DestinyProfileManager.js';
import { DefinitionsStack } from '../manifest-util.js';
import { patchDestinyLinkedProfilesResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';

export class DestinyAPIClient {

    /**
     * @typedef {Object} constructorOptions
     * @property {string?} code
     * @property {string?} givenState
     * @property {string?} expectedState
     * @property {string?} refresh
     */
    constructor() {
        /**
         * @type {string | null}
         */
        this.linkedProfileId = null;
        /**
         * @type {TokenInfo | null}
         */
        this._tokenInfo = null;
        /**
         * @type {DefinitionsStack}
         */
        this._definitionsQueue = new DefinitionsStack('en');
        /**
         * @type BungieProfileManager
         */
        this.bungieProfiles = new BungieProfileManager(this);
        /**
         * @type DestinyProfileManager
         */
        this.destinyProfiles = new DestinyProfileManager(this);
    }

    /**
     * Logs the current client in to a user
     * @param {TokenInfo} tokenInfo The token info for the user
     * @param {boolean=false} fetchUser Fetch the logged-in user's profile. Defaults to false.
     * @param {function?} callback an optional callback
     * @return {Promise<void|*>}
     */
    async login(tokenInfo, fetchUser, callback) {
        this._tokenInfo = tokenInfo;
        return this.#init(this._tokenInfo.bungieMembershipId)
            .then(() => {
                if (fetchUser) {
                    return Promise.resolve(this.destinyProfiles.fetch(this.user));
                }
            })
            .then(() => {
                if (callback) callback()
            });
    }

    /**
     * Initializes all data in the system
     * @param membershipId the id on Bungie.net of the member
     * @return {Promise<void>}
     */
    async #init(membershipId) {
        const res = await getLinkedProfiles(rateLimitedRequest.bind(this), {
            membershipId,
            membershipType: BungieMembershipType.BungieNext
        });

        this.linkedProfileId = res.Response.profiles[0].membershipId
        const context = {
            requestMembershipType: BungieMembershipType.BungieNext,
            requestMembershipId: membershipId
        }
        patchDestinyLinkedProfilesResponse(res.Response, this, context);
    }

    /**
     * Terminate the current connection
     */
    stop() {
        for (const key in this) {
            delete this[key];
        }
        delete this;
    }

    /**
     * The main membership attached to this account
     * @return {DestinyProfile}
     */
    get user() {
        return this.destinyProfiles.cache.get(this.linkedProfileId);
    }

    /**
     * @return {TokenInfo | null}
     */
    get tokens() {
        return this._tokenInfo;
    }
}