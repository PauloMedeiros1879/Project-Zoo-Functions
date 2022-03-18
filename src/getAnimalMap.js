const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap({ includeNames, sex, sorted } = {}) {
  const animalsZone = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((specie) => {
    if (includeNames) {
      const filter = specie.residents.filter((gener) => gener.sex === sex || sex === undefined);
      const names = filter.map((gener2) => gener2.name);
      const getNames = { [specie.name]: names };
      if (sorted) {
        names.sort();
      }
      animalsZone[specie.location].push(getNames);
    } else {
      animalsZone[specie.location].push(specie.name);
    }
  });
  return animalsZone;
}

module.exports = getAnimalMap;
