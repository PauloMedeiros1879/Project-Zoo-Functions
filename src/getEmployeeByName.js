const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {}; // Apenas a linha 7 (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

module.exports = getEmployeeByName;
