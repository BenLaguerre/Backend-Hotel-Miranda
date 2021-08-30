var connectionDB = require('../dataBase');

const conciergeForQuery = {
  name: '',
  join_date: '',
  job_description: '',
  phone_number: '',
  state: '',
  photo: ''
}

exports.create_concierge = function(req, res) {
	connectionDB.query('INSERT INTO concierges SET ?', conciergeForQuery, function (err, rows, fields) {
		if (err) {
			console.error(err);
		} else {
				console.log('Done', conciergeForQuery.name);
		}
	})
};

exports.concierges_list = function(req, res) {
    connectionDB.query('SELECT * FROM concierges', function (err, rows, fields) {
        if (err) throw err
        return res.json(rows)
      })
};

exports.specific_concierge = function(req, res) {
    connectionDB.query(`SELECT * FROM concierges WHERE id = ${req.params.id}`, function (err, rows, fields) {
        if (err) throw err
        return res.json(rows)
      })
};

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

