const Question = require('../models/questions');

exports.getUsers = (req, res, next) => {
    users.fetchAll()
      .then(([rows, fieldData]) => {
        res.render('/', {
          prods: rows,
          pageTitle: 'All Questions',
          path: '/questions'
        });
      })
      .catch(err => console.log(err));
  };


  exports.getIndex = (req, res, next) => {
    User.fetchAll()
      .then(([rows, fieldData]) => {
        res.render('/', {
          prods: rows,
          pageTitle: 'Questions',
          path: '/'
        });
      })
      .catch(err => console.log(err));
  };
  