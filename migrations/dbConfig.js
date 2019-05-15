//return lknexfile and makes it so we don't have to leave it in router 
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development)

module.exports = db;