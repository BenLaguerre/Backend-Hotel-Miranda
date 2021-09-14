const { Booking } = require('../model');

const newBooking = {
  name: '',
  booking_date: '',
  start_date: '',
  exit_date: '',
  message: '',
  room_id: ' '
}

exports.create_booking = function(req, res) {
	var filer = new Booking ({
    name: newBooking.name,
		booking_date: newBooking.booking_date,
		start_date: newBooking.start_date,
		exit_date: newBooking.exit_date,
		message: newBooking.message,
		room_id: newBooking.room_id,
  })
};

exports.bookings_list = async function(req, res) {
  const booking = await Booking.find();
  return res.json(booking)
};
  

exports.specific_booking =  async function(req, res) {
  const specificBooking = await Booking.find({id : req.params.id});
  return res.json(specificBooking)
};
/*
exports.update_booking = function(req, res) {
  connectionDB.query('UPDATE bookings SET ?', bookingForQuery, function (err, rows, fields) {
    if (err) {
      console.error(err);
		} else {
				console.log('Done', bookingForQuery.name);
		}
	})
}

exports.delete_booking = function(req, res) {
  connectionDB.query(`DELETE FROM bookings WHERE id = ${req.params.id}`, function (err, rows, fields) {
    if (err) {
      console.error(err);
		} else {
				console.log('Done', bookingForQuery.name);
		}
	})
}*/