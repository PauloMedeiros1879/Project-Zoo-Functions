const data = require('../data/zoo_data');

function getEmployeesCoverage(element) {
  if (!element) return element();
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
