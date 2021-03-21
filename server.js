const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false,
  }));

app.use(bodyParser.json({limit: '5mb'}));

app.use('/user', userRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Server started at port number : " + process.env.PORT);
})