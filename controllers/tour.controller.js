/* internal imports */
const { insertNewTourService } = require("../services/tour.service");

/* insert a new tour */
async function insertNewTour(req, res, next) {
  try {
    const result = await insertNewTourService(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully insert a new tour on DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { insertNewTour };
