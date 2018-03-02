const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  req.user.save()
  	.then((savedUser) => {
  		res.status(200).json({ success: 'User saved' });
  	})
  	.catch(err => {
  		res.status(500).json({ error: err });
  	});
};

module.exports = {
  createUser
};
