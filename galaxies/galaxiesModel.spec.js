const Galaxies = require('./galaxiesModel');
const db = require('../data/dbConfig');

describe('The Galaxies Model', () => {

  beforeEach(() => {
    return db('galaxies').truncate();
  });

  describe('The Insert Function', () => {

    it('should insert a galaxy into the db', async () => {
      await Galaxies.insert({name: 'sombrero'});

      const galaxies = await db('galaxies');

      expect(galaxies.length).toBe(1);
      expect(galaxies[0].name).toBe('sombrero');
    });

    it('should return the inserted galaxy with id', async () => {
      const galaxy = await Galaxies.insert({name: 'sunflower'});

      expect(galaxy.id).toBe(1);
      expect(galaxy.name).toBe('sunflower');
    });
  });

  describe('The Remove Function', () => {

    it('should delete a galaxy', async () => {

    });
  });
});
