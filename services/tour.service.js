/* internal import */
const Tour = require("../schemas/tour.schema");

/* display specific tour service */
async function displaySpecificTourService(id) {
  const tour = await Tour.findById(id);
  const result = await Tour.updateOne(
    { _id: id },
    { $set: { views: tour.views + 1 } }
  );

  return tour;
}

/* remove specific tour service */
async function removeSpecificTourService(id) {
  const result = await Tour.findByIdAndDelete(id);
  //   const result = await Tour.deleteMany({});
  return result;
}

module.exports = { displaySpecificTourService, removeSpecificTourService };
