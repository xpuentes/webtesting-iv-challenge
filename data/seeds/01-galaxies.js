
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('galaxies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('galaxies').insert([
        {name: 'milky way'},
        {name: 'andromeda'},
        {name: 'canis major dwarf'}
      ]);
    });
};
