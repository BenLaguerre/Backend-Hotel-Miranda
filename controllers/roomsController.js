const { Room } = require('../model');

//Create
exports.create_room = function(req, res) {

	var room = new Room ({
		name: req.body.name,
		bed: req.body.bed,
		price: req.body.price,
		status: true
	});

  // Save Room in the database
  room
    .save(room)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Room."
      });
    });
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
