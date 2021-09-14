const { Room } = require('../model');

const newRoom = { 
  name: '',
  room_type: '',
  service: '',
  price: '',
  discount_price: '',
  state: '',
  photo: ''
}

exports.create_room = function(req, res) {
	var filer = new Room ({
		name: newRoom.name,
		room_type: newRoom.room_type,
		service: newRoom.service,
		price: newRoom.price,
		discount_price: newRoom.discount_price,
		state: newRoom.state,
		photo: newRoom.photo
	})
};

exports.rooms_list = async function(req, res) {
	const room = await Room.find();
	return res.json(room)
};

exports.specific_room = async function(req, res) {
	const specificRoom = await Room.find({id: req.params.id})
	return res.json(specificRoom)
};

/*
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
*/