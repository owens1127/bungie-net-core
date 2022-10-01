import { Manifest } from 'bungie-api-typedef';
import { getDestinyManifest } from 'bungie-api-typedef/endpoints/Destiny2';
import { PlatformErrorCodes } from 'bungie-api-typedef/schemas';
import fetch from 'node-fetch';
import { BungieAPIError } from './errors/BungieAPIError.js';

/**
 * @type {import('bungie-api-typedef/schemas').DestinyManifest}
 */
export let MANIFEST = await fetchManifest();

/**
 * Returns the Destiny Manifest
 * @return {import('bungie-api-typedef/schemas').DestinyManifest}
 */
async function fetchManifest() {
    return getDestinyManifest(manifestHttp).then(res => {
        if (res.ErrorCode === PlatformErrorCodes.ApiKeyMissingFromRequest) {
            return fetchManifest();
        } else if (res.ErrorCode !== 1) {
            throw new BungieAPIError(res);
        } else {
            return res.Response
        }
    });
}

export async function updateManifest() {
    MANIFEST = await fetchManifest();
}

/**
 * @type import('bungie-api-typedef/http.d.ts').HttpClient
 * @param {import('bungie-api-typedef/http.d.ts').HttpClientConfig} config
 * @return Promise<any>
 */
function manifestHttp(config) {
    const url = config.url + (config.params ? '?' + config.params : '');
    const start = Date.now()
    return fetch(url, {
        method: config.method,
        headers: {
            'Content-Type': 'application/json'
            // 'X-API-KEY': getItem('API_KEY'),
        }
    }).then((response) => {
        console.log({
            method: config.method,
            url,
            status: response.status,
            response_time: Date.now() - start
        })
        return response.json()
    })
}

/**
 *
 * @param {import('bungie-api-typedef/manifest').DestinyManifestLanguage} language
 * @param {import('bungie-api-typedef/manifest').DestinyManifestComponentName} tableName
 * @return {Promise<import('bungie-api-typedef/manifest').AllDestinyManifestComponents[tableName]>}
 */
export function getManifestComponent(language, tableName) {
    const params = {
        destinyManifest: MANIFEST,
        tableName, language
    }
    return Manifest.getDestinyManifestComponent(manifestHttp, params);
}

/**
 * @param {import('bungie-api-typedef/manifest').DestinyManifestLanguage} language
 * @return {Promise<import('bungie-api-typedef/manifest').AllDestinyManifestComponents>}
 */
export function getAllManifestComponents(language) {
    const params = {
        destinyManifest: MANIFEST,
        language
    }
    return Manifest.getAllDestinyManifestComponents(manifestHttp, params)
}

/**
 *
 * @param {import('bungie-api-typedef/manifest').DestinyManifestLanguage} language
 * @param {import('bungie-api-typedef/manifest').DestinyManifestComponentName[]} tableNames
 * @return {Promise<import('bungie-api-typedef/manifest').DestinyManifestSlice<import('bungie-api-typedef/manifest').DestinyManifestComponentName[]>>}
 */
export function getManifestSlice(language, tableNames) {
    const params = {
        destinyManifest: MANIFEST,
        tableNames,
        language
    }
    return Manifest.getDestinyManifestSlice(manifestHttp, params)
}

export class DefinitionsStack {
    constructor(language) {
        this.language = language;
        /**
         *
         * @type {Map<string, ComponentStackItem[]>}
         */
        this.stack = new Map();
    };

    /**
     * @typedef {Object} ComponentStackItem
     * @property hash
     * @property binding
     */

    /**
     * @param hash
     * @param component
     * @param binding
     */
    addItem(hash, component, binding) {
        this.stack.get(component)?.push({
            hash: hash,
            binding: binding
        }) || this.stack.set(component, [{
            hash: hash,
            binding: binding
        }])
    }

    /**
     * @return promise<void>}
     */
    process() {
        const components = []
        for (const key of this.stack.keys()) {
            components.push(key)
        }
        return getManifestSlice('en', components).then(r => {
            Object.keys(r).forEach((component) => {
                this.stack.get(component).forEach(item => {
                    mapHashToDefinition(r[component][item.hash], item.binding)
                })
            })
        })
    }
}

/**
 * @param {import('bungie-api-typedef/manifest').DestinyManifestComponentName | string} definition
 * @param {Object} binding The item to map the definition to
 */
export function mapHashToDefinition(definition, binding) {
    binding.definition = definition;
}