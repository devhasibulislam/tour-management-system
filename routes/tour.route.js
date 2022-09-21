/* external import */
const express = require("express");

/* internal import */
const tourController = require("../controllers/tour.controller");

/* router connection */
const router = express.Router();

/* router credentials */
router.route("/:id").get(tourController.displaySpecificTour);

module.exports = router;
