const Sequelize = require('sequelize');
const db = require('../db');

const Url = db.define('url', {
  original_url: {
    type: Sequelize.STRING({
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
    }),
  },
  short_url: {
    type: Sequelize.STRING({
      allowNull: false,
    }),
    unique: true,
  },
});

module.exports = Url;
