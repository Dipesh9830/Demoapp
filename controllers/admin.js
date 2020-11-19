const User = require('../models/user');
const Question = require('../models/questions');


exports.postAddUser = (req, res, next) => {
    const id = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    User.create({
      id: id,
      username: username,
      password: password,
      email: email,
      startup_id: startup_id
    })
      .then(result => {
        console.log(result);
        console.log('Created User');
      })
      .catch(err => {
        console.log(err);
      });
  };