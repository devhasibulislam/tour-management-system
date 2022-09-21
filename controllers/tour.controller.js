/* internal import */
const tourService = require("../services/tour.service");

/* display specific tour with view count */
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

/* update specific tour */
async function reformSpecificTour(req, res, next) {
  try {
    const result = await tourService.reformSpecificTourService(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Reforming specific tour in DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* delete specific tour */
async function removeSpecificTour(req, res, next) {
  try {
    const result = await tourService.removeSpecificTourService(req.params.id);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Required tour deleted from DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  displaySpecificTour,
  reformSpecificTour,
  removeSpecificTour,
};
