/* internal import */
const Tour = require("../schemas/tour.schema");

async function displaySpecificTourService(id) {
  const tour = await Tour.findById(id);
  const result = await Tour.updateOne(
    { _id: id },
    { $set: { views: tour.views + 1 } }
  );

  return tour;
}

module.exports = { displaySpecificTourService };
