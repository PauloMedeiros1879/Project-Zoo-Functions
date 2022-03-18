const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const verifyName = species.find((nameAnimal) => nameAnimal.name === animal);
  const { residents } = verifyName;
  return residents.every((nameAge) => nameAge.age > age);
}

module.exports = getAnimalsOlderThan;
