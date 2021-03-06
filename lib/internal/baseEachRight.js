var baseForOwnRight = require('./baseForOwnRight'),
    createBaseEach = require('./createBaseEach');

/**
 * The base implementation of `bue.forEachRight` without support for callback shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEachRight = createBaseEach(baseForOwnRight, true);

module.exports = baseEachRight;
