const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => console.log('база подключена'))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use((req, res, next) => {
  req.user = {
    _id: '645a6627dd02de7ba24efc76',
  };

  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
