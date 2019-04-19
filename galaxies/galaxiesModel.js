const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll
};

async function insert(galaxy) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('galaxies');
}
