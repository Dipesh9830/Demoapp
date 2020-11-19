const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./util/database');
const user = require('./models/user');




const app = express();
//const port = 8000;


app.get('/', (req, res) => {
  res.send('Hello World!')
});

//app.listen(port, () => {
 // console.log(`Example app listening on port ${port}!`)
//});

sequelize
  .sync({force: true})
  .then(result => {
    //console.log(result);
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });
