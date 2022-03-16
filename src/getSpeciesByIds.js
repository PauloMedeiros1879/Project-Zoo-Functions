const data = require('../data/zoo_data');

function getSpeciesByIds(...zooIds) {
  // seu código aqui
  if (typeof zooIds === 'undefined') {
    return [];
  }
  return data.species.filter((specie) => specie.id === zooIds);
}

module.exports = getSpeciesByIds;
