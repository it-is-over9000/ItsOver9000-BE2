const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    remove,
    find,
    findBy
}

function add(body) {
    return db('users')
        .insert(body)
}

function update(id, body) {
    return db('users')
        .where({ id })
        .update(body);
}

async function remove(id) {
    await db('users')
        .where({ id })
        .del();

    return db('users');
}

function find() {
    return db('users');
}

function findBy(filter) {
    return db('users')
        .where(filter)
}