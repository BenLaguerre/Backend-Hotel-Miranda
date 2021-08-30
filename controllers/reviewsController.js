var connectionDB = require('../dataBase');

const reviewForQuery = {
  name: '',
  date: '',
  comment:  '',
  action: ''
}

exports.create_review = function(req, res) {
	connectionDB.query('INSERT INTO reviews SET ?', reviewForQuery, function (err, rows, fields) {
		if (err) {
			console.error(err);
		} else {
				console.log('Done', reviewForQuery.name);
		}
	})
};

exports.reviews_list = function(req, res) {
    connectionDB.query('SELECT * FROM reviews', function (err, rows, fields) {
        if (err) throw err
        return res.json(rows)
      })
};

exports.specific_review = function(req, res) {
    connectionDB.query(`SELECT * FROM reviews WHERE id = ${req.params.id}`, function (err, rows, fields) {
        if (err) throw err
        return res.json(rows)
      })
};

exports.update_review = function(req, res) {
  connectionDB.query('UPDATE reviews SET ?', roomForQuery, function (err, rows, fields) {
    if (err) {
      console.error(err);
		} else {
				console.log('Done', reviewForQuery.name);
		}
	})
}

exports.delete_review = function(req, res) {
  connectionDB.query(`DELETE FROM reviews WHERE id = ${req.params.id}`, function (err, rows, fields) {
    if (err) {
      console.error(err);
		} else {
				console.log('Done', reviewForQuery.name);
		}
	})
}