// @Author: Kishan Thakkar
const express = require("express");
const {
  getEventList,
  getBookedEvents,
  bookEvent,
  getEventDetails,
  unregisterEvent,
} = require("../controllers/events.controller");
const validateBookEvent = require("../validators/events.validator");

const EventRouter = express.Router();

EventRouter.post("/", getEventList);
EventRouter.get("/event/:eventId/details/:userId", getEventDetails);
EventRouter.post("/bookedEvents/:userId", getBookedEvents);
EventRouter.post("/bookedEvents/:bookingId/unregister", unregisterEvent);
EventRouter.post("/bookEvent", validateBookEvent("bookEvent"), bookEvent);

module.exports = EventRouter;
