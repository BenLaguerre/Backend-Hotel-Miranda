const { Concierge } = require('../model');

exports.create_concierge = function(req, res) {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  var concierge = new Review ({
    name: req.body.name,
		join_date: req.body.join_date,
		job_description: req.body.job_description,
		phone_number: req.body.phone_number,
		state: 1
  })

  // Save Concierge in the database
  concierge
    .save(concierge)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Concierge."
      });
    });
};

exports.concierges_list = async function(req, res) {
  const concierge = await Concierge.find();
  return res.json(concierge)
};

exports.specific_concierge = async function(req, res) {
  const specificConcierge = await Concierge.find({id : req.params.id});
  return res.json(specificConcierge)
};
/*
exports.update_concierge = function(req, res) {
  connectionDB.query('UPDATE concierges SET ?', conciergeForQuery, function (err, rows, fields) {
    if (err) {
      console.error(err);
		} else {
				console.log('Done', conciergeForQuery.name);
		}
	})
}

exports.delete_concierge = function(req, res) {
  connectionDB.query(`DELETE FROM concierges WHERE id = ${req.params.id}`, function (err, rows, fields) {
    if (err) {
      console.error(err);
		} else {
				console.log('Done', conciergeForQuery.name);
		}
	})
}

*/