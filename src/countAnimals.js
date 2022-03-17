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
}
countAnimals();

module.exports = countAnimals;
