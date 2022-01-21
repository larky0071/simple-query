const mysql2 = require('mysql2');
module.exports.create = (options) => mysql2.createConnection(options);
module.exports.pool = (options) => mysql2.createPool(options);