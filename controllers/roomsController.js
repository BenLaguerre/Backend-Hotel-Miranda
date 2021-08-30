var connectionDB = require('../dataBase');

const roomForQuery = { 
  name: '',
  room_type: '',
  service: '',
  price: '',
  discount_price: '',
  state: '',
  photo: ''
}

exports.create_room = function(req, res) {
	connectionDB.query('INSERT INTO rooms SET ?', roomForQuery, function (err, rows, fields) {
		if (err) {
			console.error(err);
		} else {
				console.log('Done', roomForQuery.name);
		}
	})
};

exports.rooms_list = function(req, res) {
	connectionDB.query('SELECT * FROM rooms', function (err, rows, fields) {
			if (err) throw err
			return res.json(rows)
		})
};

exports.specific_room = function(req, res) {
	connectionDB.query(`SELECT * FROM rooms WHERE id = ${req.params.id}`, function (err, rows, fields) {
		if (err) throw err
		return res.json(rows)
	})
};

exports.update_room = function(req, res) {
  connectionDB.query('UPDATE rooms SET ?', roomForQuery, function (err, rows, fields) {
    if (err) {
      console.error(err);
		} else {
				console.log('Done', roomForQuery.name);
		}
	})
}

exports.delete_room = function(req, res) {
  connectionDB.query(`DELETE FROM rooms WHERE id = ${req.params.id}`, function (err, rows, fields) {
    if (err) {
      console.error(err);
		} else {
				console.log('Done', roomForQuery.name);
		}
	})
}
