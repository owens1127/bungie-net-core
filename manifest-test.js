import { getDestinyEntityDefinition } from 'bungie-api-typedef/endpoints/Destiny2/index.js';
import * as dotenv from 'dotenv'
import fetch from 'node-fetch';
import * as Destiny from './index.js'
import { getItem } from './lib/bungie-net-config.js';
import { rateLimitedRequest } from './lib/rate-limiter.js';

dotenv.config({
    path: `.env`
});

/**
 * for back-end applications, these values should be retrieved from environmental variables
 * for front-end applications, these values could be retrieved in a number of different ways
 */
Destiny.configure({
    BUNGIE_API_KEY: process.env.BUNGIE_API_KEY,
    BUNGIE_CLIENT_ID: process.env.BUNGIE_CLIENT_ID,
    BUNGIE_SECRET: process.env.BUNGIE_SECRET
});
const params = {
    entityType: "DestinyStatDefinition",
    hashIdentifier: parseInt('144602215')
}

getDestinyEntityDefinition((config) => {
    const url = config.url + (config.params ? '?' + config.params : '');
    const start = Date.now()
    return fetch(url, {
        method: config.method,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': getItem('BUNGIE_API_KEY'),
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
}, params).then(r => console.log(r.Response));