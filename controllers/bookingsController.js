const { Booking } = require('../model');

exports.create_booking = function(req, res) {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

	var booking = new Booking ({
    name: req.body.name,
		booking_date: req.body.booking_date,
		start_date: req.body.start_date,
		exit_date: req.body.exit_date,
		message: req.body.message,
		room_id: req.body.room_id
  })

  booking
    .save(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Booking."
      });
    });
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