import { Base } from './Base.js';

/**
 * Represents any player's profile.
 * @abstract
 * @extends {Base}
 */
export class BaseProfile extends Base {

    constructor(client, data, context = {}) {
        super(client);
        Object.defineProperty(this, 'membershipType',
            {value: data.membershipType || context.membershipType, writable: false});
        Object.defineProperty(this, 'membershipId',
            {value: data.membershipId  || context.membershipType, writable: false});
    }

    _patch(data) {
        super._patch(data);
        if ('crossSaveOverride' in data) {
            /**
             * The overriding membership type
             * @type import('bungie-api-typedef/schemas').BungieMembershipType
             */
            this.crossSaveOverride = data.crossSaveOverride
        }
        if ('isPublic' in data) {
            /**
             * Whether the profile is public or not
             * @type {boolean}
             */
            this.isPublic = data.isPublic
        }
        if ('bungieGlobalDisplayName' in data) {
            /**
             * The name of the account in-game
             * @type {string}
             */
            this.bungieGlobalDisplayName = data.bungieGlobalDisplayName
        }
        if ('bungieGlobalDisplayNameCode' in data) {
            /**
             * The discriminator of the account in game
             * @type {number}
             */
            this.bungieGlobalDisplayNameCode = data.bungieGlobalDisplayNameCode
        }
        if ('profileIndex' in data) {
            /**
             * The index of the profile in a list of destinyProfiles
             * @type {number}
             */
            this.profileIndex = data.profileIndex
        }
    }

    /**
     * Returns the bungie name with the # discriminator
     * @type {string}
     * @readonly
     */
    get bungieName() {
        return this.bungieGlobalDisplayName + '#' + this.bungieGlobalDisplayNameCode;
    }

    // TODO methods :)
}