import { CharacterManager } from '../managers/CharacterManager.js';
import { InstancedItemManager } from '../managers/InstancedItemManager.js';
import { UninstancedItemManager } from '../managers/UninstancedItemManager.js';
import { BaseProfile } from './BaseProfile.js';

/**
 * Represents any Schemas player's profile.
 * @extends {BaseProfile}
 */
export class DestinyProfile extends BaseProfile {

    constructor(client, data, context = {}) {
        super(client, data, context);

        this._patch({...data, ...context});

        this.characters = new CharacterManager(client, this.membershipId, this.membershipType);
        this.instancedItems =
            new InstancedItemManager(client, this.membershipId, this.membershipType);
        this.uninstancedItems =
            new UninstancedItemManager(client, this.membershipId, this.membershipType);
    }

    _patch(data) {
        super._patch(data);
        if ('iconPath' in data) {
            /**
             * @type string
             */
            this.iconPath = data.iconPath;
        }
        if ('dateLastPlayed' in data) {
            /**
             * The date last played
             * @type {Date}
             */
            this.dateLastPlayed = new Date(data.dateLastPlayed);
        }
        if ('isOverridden' in data) {
            /**
             * Is this member overriden through crosssave?
             * @type {boolean}
             */
            this.isOverridden = data.isOverridden
        }
        if ('isCrossSavePrimary' in data) {
            /**
             * Is this member the primary cross save character?
             * @type {boolean}
             */
            this.isCrossSavePrimary = data.isCrossSavePrimary
        }
        if ('applicableMembershipTypes' in data) {
            /**
             * The other applicable membership types for the account
             * @type {import('bungie-api-typedef/schemas').DestinyMembershipType[]}
             */
            this.applicableMembershipTypes = data.applicableMembershipTypes
        }
        if ('displayName' in data) {
            /**
             * The platform-specific display name
             * @type {string}
             */
            this.platformDisplayName = data.displayName
        }
        if ('versionsOwned' in data) {
            /**
             * The versions of the game owned
             * @type {number}
             */
            this.versionsOwned = data.versionsOwned
        }
        if ('characterIds' in data) {
            /**
             * The IDs of all the characters
             * @type {string[]}
             */
            this.characterIds = data.characterIds;
            data.characterIds.forEach(id => {
                this.characters._update(id, {},
                    {membershipId: this.membershipId, membershipType: this.membershipType})
            })
        }
        if ('seasonHashes' in data) {
            /**
             * The hashes of all the seasons
             * @type {string[]}
             */
            this.seasonHashesOwned = data.seasonHashes
        }
        if ('eventCardHashesOwned' in data) {
            /**
             * the event card's owned
             * @type {string[]}
             */
            this.eventCardHashesOwned = data.eventCardHashesOwned
        }
        if ('currentSeasonHash' in data) {
            /**
             * the current season hash
             * @type {string}
             */
            this.currentSeasonHash = data.currentSeasonHash
        }
        if ('currentSeasonRewardPowerCap' in data) {
            /**
             * The seasonal max power
             * @type {string}
             */
            this.currentSeasonRewardPowerCap = data.currentSeasonRewardPowerCap
        }
        if ('activeEventCardHash' in data) {
            /**
             * The active event card
             * @type {string}
             */
            this.activeEventCardHash = data.activeEventCardHash
        }
        if ('kioskItems' in data) {
            /**
             * What items are available from kiosks at a profile level
             * @type {Object<string, string[]>}
             */
            this.kioskItems = data.kioskItems
        }
        if ('checklists' in data) {
            /**
             * The set of checklists keyed by the hash identifier of the Checklist
             * (DestinyChecklistDefinition). For each checklist returned, its value is itself a
             * Dictionary keyed by the checklist's hash identifier with the value being a boolean
             * indicating if it's been discovered yet.
             * @type {Object<number, Object<number, boolean>>}
             */
            this.checklists = data.checklists
        }
        if ('seasonalArtifacts' in data) {
            /**
             * Data related to your progress on the current season's artifact that is the same
             * across characters.
             * @type import('bungie-api-typedef/schemas').DestinyArtifactProfileScoped
             */
            this.seasonalArtifacts = data.seasonalArtifacts
        }
        if ('nodes' in data) {
            /**
             * @type {Object.<number,
             *     import('bungie-api-typedef/schemas').DestinyPresentationNodeComponent>}
             */
            this.presentationNodes = data.nodes
        }
        if ('records' in data) {
            /**
             * @type {import('bungie-api-typedef/schemas').DestinyProfileRecordsComponent}
             */
            this.triumphs = data.records
        }
        if ('collectibles' in data) {
            /**
             *
             * @type {import('bungie-api-typedef/schemas').DestinyProfileCollectiblesComponent}
             */
            this.collectibles = data.collectibles
        }
        if ('transitoryData' in data) {
            /**
             *
             * @type {import('bungie-api-typedef/schemas').DestinyProfileTransitoryComponent}
             */
            this.transitoryData = data.transitoryData
        }
        if ('metrics' in data) {
            /**
             *
             * @type {import('bungie-api-typedef/schemas').DestinyMetricsComponent}
             */
            this.metrics = data.metrics
        }
        if ('stringVariables' in data) {
            /**
             * @type {import('bungie-api-typedef/schemas').DestinyStringVariablesComponent}
             */
            this.stringVariables = data.stringVariables
        }
        if ('currencies' in data) {
            /**
             * @type {import('bungie-api-typedef/schemas').DestinyCurrenciesComponent}
             */
            this.currencies = data.currencies
        }
        if ('vendorReceipts' in data) {
            /**
             * @type {import('bungie-api-typedef/schemas').DestinyVendorReceipt[]}
             */
            this.vendorReceipts = data.vendorReceipts
        }
    }

    /**
     * Returns information about cross save
     * @return {{isOverriden: boolean, isCrossSavePrimary: boolean, applicableMembershipTypes,
     *     crossSaveOverride: import('bungie-api-typedef/schemas').BungieMembershipType}}
     */
    crossSaveInfo() {
        return {
            platform: this.membershipType,
            isCrossSavePrimary: this.isCrossSavePrimary,
            isOverriden: this.isOverridden,
            crossSaveOverride: this.crossSaveOverride,
            applicableMembershipTypes: this.applicableMembershipTypes
        }
    }
}