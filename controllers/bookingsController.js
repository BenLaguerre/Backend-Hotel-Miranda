var connectionDB = require('../dataBase');

const bookingForQuery = {
  name: '',
  booking_date: '',
  start_date: '',
  exit_date: '',
  message: '',
  room_id: Math.ceil(Math.random() * 20)
}

exports.create_booking = function(req, res) {
	connectionDB.query('INSERT INTO bookings SET ?', bookingForQuery, function (err, rows, fields) {
		if (err) {
			console.error(err);
		} else {
				console.log('Done', bookingForQuery.name);
		}
	})
};

exports.bookings_list = function(req, res) {
    connectionDB.query('SELECT bookings.*, rooms.room_type FROM bookings INNER JOIN rooms ON bookings.room_id = rooms.id', function (err, rows, fields) {
        if (err) throw err
        return res.json(rows)
      })
};

exports.specific_booking = function(req, res) {
    connectionDB.query(`SELECT * FROM bookings WHERE id = ${req.params.id}`, function (err, rows, fields) {
        if (err) throw err
        return res.json(rows)
      })
};

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
}