var mongoose = require('mongoose');
const { Schema } = mongoose;

var mongoDB = 'mongodb://127.0.0.1/mirandadb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Create collection room
const roomSchema = new Schema({
    id: Number,
    name:  String, 
    bed: String,
    price: Number,
    status: Boolean,
    photo: String
});
  
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
  
var Concierge = mongoose.model('Concierge', conciergeSchema)

//Create collection reviews
const reviewSchema = new Schema({
    id: Number,
    name: String,
    date: Date,
    comment: String
  });
  
var Review = mongoose.model('Review', reviewSchema)

module.exports = {Room, Booking, Concierge, Review};