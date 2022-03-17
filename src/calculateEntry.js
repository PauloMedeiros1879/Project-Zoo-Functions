const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const visitorsZoo = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age } = entrants) => {
    if (age < 18) {
      visitorsZoo.child += 1;
    }
    if (age === 18 && age < 50) {
      visitorsZoo.adult += 1;
    }
    if (age >= 50) {
      visitorsZoo.senior += 1;
    }
  });
  return visitorsZoo;
}

function calculateEntry(entrants) {
  if (entrants !== undefined && Object.keys(entrants).length !== 0) {
    const customers = countEntrants(entrants);
    const { child, adult, senior } = customers;
    return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
