const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
// const nodemailer = require('nodemailer');
// const creds = require('../../contact.config');
const cors = require('cors');
// const router = require('express').Router();
// module.exports = router;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./api'));
app.use(morgan('dev'));

// if (process.env.NODE_ENV) {

// }
app.use(express.static(path.join(__dirname, '..', 'build')));

// app.get('/ping', function (req, res) {
//   return res.send('pong');
// });

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build'));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '..', 'build'));
// });

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening to server on port 3000');
});

// let transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS,
//   },
// };

// let transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// router.post('/send', (req, res, next) => {
//   let name = req.body.name;
//   let email = req.body.email;
//   let message = req.body.message;
//   let content = `name: ${name} \n email: ${email} \n message: ${message} `;

//   let mail = {
//     from: name,
//     to: 'm11elbal@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: content,
//   };

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail',
//       });
//     } else {
//       res.json({
//         msg: 'success',
//       });
//     }
//   });
// });
