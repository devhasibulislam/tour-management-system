/* internal import */
const tourService = require("../services/tour.service");

async function displaySpecificTour(req, res, next) {
  try {
    const result = await tourService.displaySpecificTourService(req.params.id);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Fetching specific data from DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { displaySpecificTour };
