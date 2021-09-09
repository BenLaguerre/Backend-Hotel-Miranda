//-----------------Connect to mySQL DataBASE-----------------------//
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  const bookingSchema = new mongoose.Schema({
    name: String
  });
  const Booking = mongoose.model('Booking', bookingSchema);
  const ben = new Booking ({ name: 'Ben'});
  await ben.save();

  const bookings = await Booking.find();
console.log(bookings);
}


