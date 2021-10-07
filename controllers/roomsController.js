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

//Create
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

//Read all
exports.rooms_list = async function(req, res) {
	const room = await Room.find();
	return res.json(room)
};

//Read one
exports.specific_room = async function(req, res) {
	const specificRoom = await Room.find({id: req.params.id})
	return res.json(specificRoom)
};

//Update
exports.update_room = async function(req, res) {
 await Room.updateOne({id: req.params.id}, {
	 id: req.body.id,
	 name: req.body.name,
	 bed: req.body.bed,
	 price: req.body.price,
	 status: req.body.status,
	 photo: req.body.photo
 })
}

//Delete
exports.delete_room = async function(req, res) {
  await Room.deleteOne({id: req.params.id})
}
