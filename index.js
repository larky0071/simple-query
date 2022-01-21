const { create, pool } = require('./src/connection')
const queryConstructor = require('./src/queryConstructor')
const conditionConstructor = require('./src/conditionConstructor')
const actions = require('./src/actionsENUM')

module.exports.connection = { create, pool }
module.exports.queryConstructor = queryConstructor
module.exports.conditionConstructor = conditionConstructor
module.exports.actions = actions