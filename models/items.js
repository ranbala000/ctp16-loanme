const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize) => {
  const Items = sequelize.define('Items', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      validate: {
        notEmpty: true,
        min : 0.00,
      },
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  });

  return Items;
};