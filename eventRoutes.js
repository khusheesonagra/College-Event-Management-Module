const express = require('express');
const {
    createEvent,
    getAllEvents,
    deleteEvent,
    editEvent,
    getEventDetails
} = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(protect, createEvent)
    .get(getAllEvents);

router.route('/:id')
    .get(getEventDetails)
    .put(protect, editEvent)
    .delete(protect, deleteEvent);

module.exports = router;