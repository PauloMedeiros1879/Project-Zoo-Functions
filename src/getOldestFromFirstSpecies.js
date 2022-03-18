const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id1) {
  const animalsId = employees.filter(({ id }) => id === id1)
    .map(({ responsibleFor }) => responsibleFor).shift(); // (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
  const animalsAndPeople = species.filter(({ id }) => id === animalsId[0]);
  const animalsResidents = animalsAndPeople[0].residents;
  const animalsOlds = animalsResidents.map(({ age }) => age)
    .reduce((a, b) => Math.max(a, b), 0);
  return Object.values(animalsResidents.find((specie) => specie.age === animalsOlds));
}

module.exports = getOldestFromFirstSpecies;
