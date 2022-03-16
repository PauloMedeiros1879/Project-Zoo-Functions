const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const verifyName = species.find((nameAnimal) => nameAnimal.name === animal);
  const { residents } = verifyName;
  const verifyAge = residents.every((nameAge) => nameAge.age > age);
  return verifyAge;
}

module.exports = getAnimalsOlderThan;
