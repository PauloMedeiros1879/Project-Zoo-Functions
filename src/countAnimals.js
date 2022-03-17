const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
  if (!animal) {
    const result = {};
    species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  // Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
  // Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.
  if (animal.sex) {
    const test = species.find(({ name }) => name === animal.specie).residents;
    const test2 = test.filter(({ sex }) => sex === animal.sex).length;
    return test2;
  }
  return species.find(({ name }) => name === animal.specie).residents.length;
}
countAnimals();

module.exports = countAnimals;
