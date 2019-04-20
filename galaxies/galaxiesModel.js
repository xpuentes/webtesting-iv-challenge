const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll
};

async function insert(galaxy) {
  const [id] = await db('galaxies').insert(galaxy);
  return db('galaxies').where({ id }).first();
}

function remove(id) {
  return db('galaxies').where({ id }).del();
}

function getAll() {
  return db('galaxies');
}
