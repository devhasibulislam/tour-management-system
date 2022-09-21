/* internal import */
const Tour = require("../schemas/tour.schema");

/* insert a new tour service */
async function insertNewTourService(data) {
  const result = await new Tour(data).save();
  return result;
}

module.exports = { insertNewTourService };
