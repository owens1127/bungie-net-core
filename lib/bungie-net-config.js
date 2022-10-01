
const _config = {
    HAS_CREDENTIALS: false,
    BUNGIE_API_KEY: '',
    BUNGIE_CLIENT_ID: '',
    BUNGIE_SECRET: ''
}

/**
 *
 * @param {string} key
 * @param {any} value
 * @throws {ReferenceError} if the key does not exist
 * @throws {TypeError} if the value differs from the accepted type
 * @return {boolean}
 */
export function setItem(key, value) {
    if (_config[key] === undefined) {
        throw new ReferenceError(`${key} is not a valid config variable`)
    }
    const type = typeof _config[key]
    if (typeof value !== type) {
        throw new TypeError(
            `The type of value ${value} did not match the correct value type of ${type} for ${key}`);
    } else {
        _config[key] = value;
    }
}

export function getItem(key) {
    if (_config[key] === undefined) {
        throw new ReferenceError(`${key} is not a valid config variable`)
    }
    return _config[key];
}
