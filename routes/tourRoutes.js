const express = require('express');
const router = express.Router();
const {
  getAllTours,
  getTour,
  updateTour,
  createTour,
  deleteTour,
} = require('../controllers/tourController');

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
