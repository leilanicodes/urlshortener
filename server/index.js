const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./api'));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening to server on port 3000');
});
