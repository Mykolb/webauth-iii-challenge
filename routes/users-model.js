const db = require('../migrations/dbConfig');

module.exports = {
    find,
    findBy,
    add
};


function find() {
    return db('users')
    .select('id', 'username');
}

function findBy(filter) {
    return db('users')
    .where(filter);
}

function add(users) {
    return db('users')
    .insert(users, 'id')
}