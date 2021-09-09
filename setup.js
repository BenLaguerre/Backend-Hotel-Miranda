//This file was used to fill the tables of the dataBase.

import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomsSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  room_type: String,
  service: String,
  price: Number,
  discount_price: Number,
  state: Boolean,
  photo: String
});

const Rooms = mongoose.model('Rooms', roomsSchema)

//------------------Fill Tables from Json files------------------//

var conciergesData = require('./json/concierges.json');
var bookingsData = require('./json/bookings.json');
var reviewsData = require('./json/reviews.json');
var roomsData = require('./json/rooms.json');

//------------------Table Rooms----------------------------------//
/*for (let room of roomsData) {
  const roomForQuery = { 
    name: room.name,
    room_type: room.room_type,
    service: room.service,
    price: room.price,
    discount_price: room.discount_price,
    state: room.state,
    photo: room.photo}

  const query = connection.query('INSERT INTO rooms SET ?', roomForQuery, function(err, results, fields) {
      if (err) {
          console.error(err);
      } else {
          console.log('Done', room.name);
      }
  });
}*/

//------------------Table Bookings----------------------------------//

/*for (let booking of bookingsData) {
  const bookingForQuery = {
    name: booking.name,
    booking_date: booking.booking_date,
    start_date: booking.start_date,
    exit_date: booking.exit_date,
    message: booking.message,
    room_id: Math.ceil(Math.random() * 20)
  }
  const query = connection.query('INSERT INTO bookings SET ?', bookingForQuery, function(err, results, fields) {
      if (err) {
          console.error(err);
      } else {
          console.log('Done', booking.name);
      }
  });
}*/

//------------------Table Concierges----------------------------------//
/*
for (let concierge of conciergesData) {
  const conciergeForQuery = {
    name: concierge.name,
    join_date: concierge.join_date,
    job_description: concierge.job_description,
    phone_number: concierge.phone_number,
    state: concierge.state,
    photo: concierge.photo
  }
  const query = connection.query('INSERT INTO concierges SET ?', conciergeForQuery, function(err, results, fields) {
      if (err) {
          console.error(err);
      } else {
          console.log('Done', concierge.name);
      }
  });
}*/

//------------------Table Reviews----------------------------------//
/*
for (let review of reviewsData) {
  const reviewForQuery = {
    name: review.name,
    date: review.date,
    comment:  review.stars + review.comment,
    action: review.action
  }
  const query = connection.query('INSERT INTO reviews SET ?', reviewForQuery, function(err, results, fields) {
      if (err) {
          console.error(err);
      } else {
          console.log('Done', review.name);
      }
  });
}*/