const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const information = () => employees.map(({ id, firstName, lastName, responsibleFor }) => {
  const listObject = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: [],
    locations: [],
  };
  for (let i = 0; i < responsibleFor.length; i += 1) {
    listObject.species.push(species.find((element) => element.id === responsibleFor[i]).name);
    listObject.locations.push(species.find((element) => element.id === responsibleFor[i]).location);
  }
  return listObject;
});

function getEmployeesCoverage(element) {
  if (!element) return information();

  if (!information().some((e) => (e.id === element.id || e.fullName.includes(element.name)))) {
    throw new Error('Informações inválidas');
  }

  return information().find((e) => (e.id === element.id || e.fullName.includes(element.name)));
}

module.exports = getEmployeesCoverage;
