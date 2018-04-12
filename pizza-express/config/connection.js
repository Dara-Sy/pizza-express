const pg = require('pg-promise')(/* OPTIONAL Initialization Options */);
// Connect pg-promise to your database here
const config = require('./dbConfig');
const db = pg(config);

module.exports = db;
