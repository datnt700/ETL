const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const db = require('./src/config/db');
const Data = require('./src/model/data');
const dataFile = require('./src/controllers/DataController');

// Connect db
db.connect();
const data = dataFile.index();

// Data.insertMany(data)
//   .then(function () {
//     console.log('Successfully saved defult items to DB');
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // For legacy browser support
};
const route = require('./src/routes');
app.use(cors(corsOptions));

//Routes init
route(app);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
