const data = require('../data/zoo_data');

function getSpeciesByIds(...zooIds) {
  return data.species.filter((specie) => {
    if (zooIds.find((element) => element === specie.id)) return specie;
    return '';
  });
}

module.exports = getSpeciesByIds;
