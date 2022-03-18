const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;

function getSchedule(scheduleTarget) {
  const settingAlerts = {
    Monday:
    {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  const days = scheduleTarget;
  if (scheduleTarget === 'Monday') {
    return settingAlerts;
  }
  return { [scheduleTarget]: {
    officeHour: `Open from ${hours[days.open]}am until ${hours[days.close]}pm`,
    exhibition: species.filter((element) => element.availability.includes(scheduleTarget))
      .map((array) => array.name),
  } };
}

module.exports = getSchedule;
