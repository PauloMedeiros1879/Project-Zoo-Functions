const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(...options) {
  if (!options) return {};
  const animalsZone = ({
    NE: species
      .filter((specie) => specie.location === 'NE')
      .map((animal) => animal.name),
    NW: species
      .filter((specie) => specie.location === 'NW')
      .map((animal) => animal.name),
    SE: species
      .filter((specie) => specie.location === 'SE')
      .map((animal) => animal.name),
    SW: species
      .filter((specie) => specie.location === 'SW')
      .map((animal) => animal.name),
  });
  return animalsZone;
}

module.exports = getAnimalMap;
