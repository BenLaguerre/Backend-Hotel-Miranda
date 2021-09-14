const { Concierge } = require('../model');

const newConcierge = {
  name: '',
  join_date: '',
  job_description: '',
  phone_number: '',
  state: '',
  photo: ''
}

exports.create_concierge = function(req, res) {
  var filer = new Review ({
    name: newConcierge.name,
		join_date: newConcierge.join_date,
		job_description: newConcierge.job_description,
		phone_number: newConcierge.phone_number,
		state: newConcierge.state,
		photo: newConcierge.photo,
  })
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