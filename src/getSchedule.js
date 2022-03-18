const data = require('../data/zoo_data');

// const { hours } = data;
const { species } = data;
function getSchedule(scheduleTarget) {
  // seu código aqui
  const days = {
    exhibition: species.filter((element) => element.availability.includes(scheduleTarget))
      .map((element) => element.name),
  };
  return days;
}

module.exports = getSchedule;
