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
  const filtrando = employees.filter((related) => related.managers.includes(managerId));
  return filtrando.map((related2) => `${related2.firstName} ${related2.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
