const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const result = {};
    species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }

  if (animal.sex) {
    const test = species.find(({ name }) => name === animal.specie).residents;
    return test.filter(({ sex }) => sex === animal.sex).length;
  }
  return species.find(({ name }) => name === animal.specie).residents.length;
}
countAnimals();

module.exports = countAnimals;
