const  mongoose = require("mongoose");
const { Schema } = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

//Create collection room
const roomSchema = new Schema({
    id: Number,
    name:  String, 
    bed: String,
    price: Number,
    status: Boolean,
    photo: String
});

roomSchema.plugin(autoIncrement.plugin, { model: 'Room', field: 'id', startAt: 21 });
var Room = mongoose.model('Room', roomSchema)

//Create collection booking
const bookingSchema = new Schema({
    id: Number,
    name: String,
    booking_date: Date,
    start_date: Date,
    exit_date: Date,
    message: String,
    room_id: Number
  });
  
bookingSchema.plugin(autoIncrement.plugin, { model: 'Schema', field: 'id', startAt: 41 });
var Booking = mongoose.model('Booking', bookingSchema)

//Create collection concierge
const conciergeSchema = new Schema({
    id: Number,
    name:  String,
    join_date: Date,
    job_description: String,
    phone_number: String,
    state: Number,
    photo: String
  });

conciergeSchema.plugin(autoIncrement.plugin, { model: 'Concierge', field: 'id', startAt: 21 });
var Concierge = mongoose.model('Concierge', conciergeSchema)

//Create collection reviews
const reviewSchema = new Schema({
    id: Number,
    name: String,
    date: Date,
    comment: String
  });
 
reviewSchema.plugin(autoIncrement.plugin, { model: 'Review', field: 'id', startAt: 21 });
var Review = mongoose.model('Review', reviewSchema)

//Create collcetion users
const userSchema = new Schema({
  username: String,
  password: String
})

var User = mongoose.model('User', userSchema)

module.exports = {Room, Booking, Concierge, Review, User};