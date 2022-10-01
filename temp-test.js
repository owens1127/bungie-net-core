import * as dotenv from 'dotenv'
import * as Destiny from './index.js'

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
})

const state = (Math.random() * 323582).toString();

const url = Destiny.createBungieNetOAuthURL({
    redirectURL: 'google.com',
    state
});
console.log(url);

const urlObj = new URL(url);
if (urlObj.searchParams.get('state') !== state) throw Error();

const tokens = await Destiny.getAccessTokenFromRefreshToken(process.env.BUNGIE_NEWO_REFRESH)

const client = new Destiny.Client();

const start = Date.now();
client.login(tokens, true, () => {
    const loggedIn = Date.now();
    console.log('Logged in as ' + client.user.bungieName);
    console.log(loggedIn - start);
    console.log(client.user.characters.cache.get(client.user.characterIds[0]).stats);
})
    .then(client.stop)
    .catch(console.error);
