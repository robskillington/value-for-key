
module.exports = valueForKey;
module.exports.set = setValueForKey;

/**
 * This method is useful to avoid the lower camel case JSHint rule 
 * when reading aribtrary JSON from a third party.
 *
 * @param {Object} object Object to get value from
 * @param {Object} key Key at which to retrieve value from
 * @returns The value from the object at the key
 */
function valueForKey(object, key) {
    return object[key];
}


/**
 * This method is useful to avoid the lower camel case JSHint rule 
 * when writing aribtrary JSON for a third party.
 *
 * @param {Object} object Object to put value to
 * @param {Object} key Key at which to put value to
 * @param {Object} value Value to put
 */
function setValueForKey(object, key, value) {
    object[key] = value;
}
