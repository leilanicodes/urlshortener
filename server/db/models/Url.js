const Sequelize = require('sequelize');
const db = require('../db');

const Url = db.define('url', {
  original_url: {
    type: Sequelize.STRING({
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }),
  },
  short_url: {
    type: Sequelize.STRING({
      allowNull: true,
    }),
  },
});

module.exports = Url;
