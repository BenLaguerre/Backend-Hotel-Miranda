const { Review } = require('../model');

const newReview = {
  name: '',
  date: '',
  comment:  '',
  action: ''
}

exports.create_review = function(req, res) {
	var filer = new Review ({
		name: newReview.name,
		date: newReview.date,
		comment: newReview.comment,
		action: newReview.action,
	})
};

exports.reviews_list = async function(req, res) {
	const review = await Review.find();
	return res.json(review)
};

exports.specific_review = async function(req, res) {
  const specificReview = await Review.find({id :req.params.id});
  return res.json(specificReview)
};

/*
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
}*/