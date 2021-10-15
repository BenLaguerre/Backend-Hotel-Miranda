const { Review } = require('../model');



exports.create_review = function(req, res) {
	if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

	var review = new Review ({
		name:req.body.name,
		date: req.body.date,
		comment: req.body.comment
	})

	// Save Review in the database
  review
    .save(review)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Review."
      });
    });
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