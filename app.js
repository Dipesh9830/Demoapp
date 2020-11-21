const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require("./models/index");
const userRoutes = require('./routes/index');



const PORT = process.env.PORT || 3000;
var app = express();
//app.use(express.urlencoded({extended:yes}));
app.use(express.json());
app.use(userRoutes);
db.sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log("Server is running");
  })
}).catch((err)=>{
  console.log(err);
})






             