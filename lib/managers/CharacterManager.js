import { getCharacter } from 'bungie-api-typedef/endpoints/Destiny2/index.js';
import { DestinyComponentType } from 'bungie-api-typedef/schemas';
import { patchCharacterResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';
import { Character } from '../structures/Character.js';
import { BaseManager } from './BaseManager.js';

/**
 * Manages API methods for Characters and stores their cache.
 * @extends {BaseManager}
 */
export class CharacterManager extends BaseManager {
    constructor(client, membershipId, membershipType, characters) {
        super(client);

        this.membershipId = membershipId;
        this.membershipType = membershipType;

        if (characters) {
            characters.forEach(char => {
                if (char instanceof Character) {
                    this.cache.set(char.characterId, char)
                }
            });
        }
    }

    /**
     * The cache of this Manager
     * @type {Map<string, Character>}
     * @name CharacterManager#cache
     */

    /**
     * Data that resolves to give a InstancedItem object. This can be:
     * * A InstancedItem object
     * * An InstancedItem id string
     * @typedef {Character|string} CharacterResolvable
     */

    /**
     * Resolves a CharacterResolvable to a Character object.
     * @method resolve
     * @memberof CharacterManager
     * @instance
     * @param {CharacterResolvable} characterResolvable The character resolvable to identify
     * @returns {?Character}
     */
    resolve(characterResolvable) {
        if (characterResolvable.characterId) {
            return super.resolve(characterResolvable.characterId);
        }
        return super.resolve(characterResolvable);
    }

    /**
     * Fetches one character from Bungie
     * @param {CharacterResolvable} resolvable The character to fetch
     * @param {DestinyComponentType[]?} components=CharacterComponents
     * @returns {Promise<Character | Character[]>}
     */
    async fetch(resolvable, components = CharacterComponents) {
        const character = this.resolve(resolvable)
        let characterId;
        if (character) {
            characterId = character.characterId;
        } else if (typeof resolvable === 'string' || typeof resolvable === 'number') {
            characterId = resolvable;
        } else {
            return Promise.reject(new ReferenceError('Unable to resolve the character'))
        }
        const res = await getCharacter(rateLimitedRequest.bind(this.client), {
            characterId,
            destinyMembershipId: this.membershipId,
            membershipType: this.membershipType,
            components
        });
        const context = {
            characterId,
            membershipId: this.membershipId,
            membershipType: this.membershipType
        }
        patchCharacterResponse(res.Response, this.client, context);
        return await this.client._definitionsQueue.process().then(() => {
            return Promise.resolve(this.cache.get(characterId));
        });
    }

    _update(id, data, context) {
        if (!this.cache.has(id)) {
            this.cache.set(id, new Character(this.client, {characterId: id, ...data, ...context}));
        } else {
            super._update(id, data, context)
        }
    }

    /**
     * @return {Character[]}
     */
    get cacheArray() {
        const arr = [];
        this.cache.forEach(value => {
            arr.push(value)
        });
        return arr;
    }
}