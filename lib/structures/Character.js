import { CharacterInstancedItemManager } from '../managers/CharacterInstancedItemManager.js';
import { CharacterUninstancedItemManager } from '../managers/CharacterUninstancedItemManager.js';
import { VendorManager } from '../managers/VendorManager.js';
import { mapHashToDefinition } from '../manifest-util.js';
import { Base } from './Base.js';

/**
 * Represents any character in Schemas
 * @extends {Base}
 */
export class Character extends Base {
    constructor(client, data, context = {}) {
        super(client);

        this._patch({...data, ...context});

        this.vendors =
            new VendorManager(client, this.membershipId, this.membershipType, this.characterId);
        this.instancedItems =
            new CharacterInstancedItemManager(client, this.membershipId, this.membershipType,
                this.characterId);
        this.uninstancedItems =
            new CharacterUninstancedItemManager(client, this.membershipId, this.membershipType,
                this.characterId);
    }

    _patch(data) {
        super._patch(data);
        if ('characterId' in data) {
            /**
             * The character's id
             * @type {string}
             */
            this.characterId = data.characterId;
        }
        if ('membershipId' in data) {
            /**
             * The member the character belongs to
             * @type {string}
             */
            this.membershipId = data.membershipId;
        }
        if ('membershipType' in data) {
            /**
             * The type of membership the character belongs to
             * @type {BungieMembershipType}
             */
            this.membershipType = data.membershipType;
        }
        if ('dateLastPlayed' in data) {
            this.dateLastPlayed = new Date(data.dateLastPlayed);
        }
        if ('minutesPlayedThisSession' in data) {
            this.minutesPlayedThisSession = parseInt(data.minutesPlayedThisSession);
        }
        if ('minutesPlayedTotal' in data) {
            this.minutesPlayedTotal = parseInt(data.minutesPlayedTotal);
        }
        if ('light' in data) {
            this.light = data.light;
        }
        if ('stats' in data) {
            this.stats = {}
            Object.keys(data.stats).forEach(hash => {
                const item = this.stats[`${hash}`] = {};
                this.client._definitionsQueue.addItem(hash, 'DestinyStatDefinition', item)
                item.value = data.stats[`${hash}`];
            })
        }
        if ('raceHash' in data) {
            this.raceHash = data.raceHash;
        }
        if ('genderHash' in data) {
            this.genderHash = data.genderHash;
        }
        if ('classHash' in data) {
            this.classHash = data.classHash;
        }
        if ('raceType' in data) {
            this.raceType = data.raceType;
        }
        if ('classType' in data) {
            this.classType = data.classType;
        }
        if ('genderType' in data) {
            this.genderType = data.genderType;
        }
        if ('emblemPath' in data) {
            this.emblemPath = 'https://www.bungie.net' + data.emblemPath;
        }
        if ('emblemBackgroundPath' in data) {
            this.emblemBackgroundPath = 'https://www.bungie.net' + data.emblemBackgroundPath;
        }
        if ('emblemHash' in data) {
            this.emblemHash = data.emblemHash;
        }
        if ('emblemColor' in data) {
            this.emblemColor = data.emblemColor;
        }
        if ('levelProgression' in data) {
            this.levelProgression = data.levelProgression;
        }
        if ('baseCharacterLevel' in data) {
            this.baseCharacterLevel = data.baseCharacterLevel;
        }
        if ('percentToNextLevel' in data) {
            this.percentToNextLevel = data.percentToNextLevel;
        }
        if ('titleRecordHash' in data) {
            this.titleRecordHash = data.titleRecordHash;
        }
        if ('kioskItems' in data) {
            /**
             * What items are available from kiosks for this character level
             * @type {Object<string, string[]>}
             */
            this.kioskItems = data.kioskItems
        }
        if ('nodes' in data) {
            /**
             * @type {Object.<number, DestinyPresentationNodeComponent>}
             */
            this.presentationNodes = data.nodes
        }
        if ('records' in data) {
            this.records = data.records;
        }
        if ('stringVariables' in data) {
            /**
             *
             * @type {DestinyStringVariablesComponent}
             */
            this.stringVariables = data.stringVariables
        }
        if ('progression' in data) {
            this.progression = data.progression;
        }
        if ('renderData' in data) {
            this.renderData = data.renderData;
        }
        if ('activities' in data) {
            this.activities = data.activities;
        }
        if ('currencies' in data) {
            /**
             * @type {DestinyCurrenciesComponent}
             */
            this.currencies = data.currencies
        }
        if ('craftables' in data) {
            this.craftables = data.craftables
        }

    }

    // TODO properties

    // TODO methods
}