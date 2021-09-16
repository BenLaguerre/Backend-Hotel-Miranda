var express = require('express');
const app = express();
var router = express.Router();
const bodyParser = require("body-parser");

//jwt Auth
const jwt = require("jsonwebtoken");

var passport = require('passport')
const jwtStrategy  = require("../strategies/jwt")
passport.use(jwtStrategy);

var rooms_controller = require('../controllers/roomsController');
var bookings_controller = require('../controllers/bookingsController');
var concierges_controller = require('../controllers/conciergesController');
var reviews_controller = require('../controllers/reviewsController');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rooms routes
router.post('/rooms', passport.authenticate('jwt', { session: false }), rooms_controller.create_room);//Create New Room
router.get('/rooms', passport.authenticate('jwt', { session: false }), rooms_controller.rooms_list);
router.get('/rooms/:id', passport.authenticate('jwt', { session: false }), rooms_controller.specific_room);
//router.put('/rooms/:id', passport.authenticate('jwt', { session: false }), rooms_controller.update_room);//Update Room
//router.delete('/rooms/:id', passport.authenticate('jwt', { session: false }), rooms_controller.delete_room);//Delete Room


//Reviews routes
router.post('/reviews', passport.authenticate('jwt', { session: false }), reviews_controller.create_review);//Create New Review
router.get('/reviews', passport.authenticate('jwt', { session: false }), reviews_controller.reviews_list);
router.get('/reviews/:id', passport.authenticate('jwt', { session: false }), reviews_controller.specific_review);/*
router.put('/reviews/:id', passport.authenticate('jwt', { session: false }), reviews_controller.update_review);//Update Review
router.delete('/reviews/:id', passport.authenticate('jwt', { session: false }), reviews_controller.delete_review);//Delete Review
*/
//Booking routes
router.post('/bookings', passport.authenticate('jwt', { session: false }), bookings_controller.create_booking);//Create New Booking
router.get('/bookings', passport.authenticate('jwt', { session: false }), bookings_controller.bookings_list); 
router.get('/bookings/:id', passport.authenticate('jwt', { session: false }), bookings_controller.specific_booking); /*
router.put('/bookings/:id', passport.authenticate('jwt', { session: false }), bookings_controller.update_booking);//Update Booking
router.delete('/bookings/:id', passport.authenticate('jwt', { session: false }), bookings_controller.delete_booking);//Delete Booking
*/
//Concierges routes
router.post('/concierges', passport.authenticate('jwt', { session: false }), concierges_controller.create_concierge);//Create New Concierge
router.get('/concierges',  passport.authenticate('jwt', { session: false }), concierges_controller.concierges_list); 
router.get('/concierges/:id', passport.authenticate('jwt', { session: false }), concierges_controller.specific_concierge);/*
router.put('/concierges/:id', passport.authenticate('jwt', { session: false }), concierges_controller.update_concierge);//Update Concierge
router.delete('/concierges/:id', passport.authenticate('jwt', { session: false }), concierges_controller.delete_concierge);//Delete Concierge
*/
//Login routes
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post("/login", (req, res) => {
  let {  password ,username } = req.body;
  if (username === "admin") {
      if (password === "admin") {
        const opts = {}
          opts.expiresIn = 2592000;  //token expires in 1 month
          const secret = "SECRET_KEY" //normally stored in process.env.secret
          const token = jwt.sign({ username }, secret, opts);
          return res.status(200).json({
              message: "Auth Passed",
              token
          })
      }
  }
  return res.status(401).json({ message: "Auth Failed" })
});


module.exports = router;
