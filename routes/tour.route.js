/* external import */
const express = require("express");

/* internal imports */
const { insertNewTour } = require("../controllers/tour.controller");

/* router connection */
const router = express.Router();

/* router credentials */
router.route("/").post(insertNewTour);

module.exports = router;
