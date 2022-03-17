const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((manager) => manager.managers
    .some((manager2) => manager2 === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((related) => related.managers.includes(managerId)
    .find((related2) => related2 === managerId));
}

module.exports = { isManager, getRelatedEmployees };
