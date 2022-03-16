const data = require('../data/zoo_data');

const { species } = data;
const { residents } = species;

function getAnimalsOlderThan(animal, age) {
  const verifyName = species.reduce((nameAnimal) => nameAnimal.name === animal);
  if (verifyName === true) {
    const verifyAge = residents.every((nameAge) => {
      if (nameAge.age > age) return verifyAge;
      return '';
    });
  }
  return verifyName;
}
module.exports = getAnimalsOlderThan;
