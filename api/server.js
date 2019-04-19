const express = require('express');

const galaxies = require('../galaxies/galaxiesModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/galaxies', async (req, res) => {
  const rows = await galaxies.getAll();

  res.status(200).json(rows);
});

module.exports = server;
