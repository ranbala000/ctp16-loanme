const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
//to do -- add foreign key constraints to lender_id, lendee_id and item_id
module.exports = (sequelize) => {
  const Transactions = sequelize.define('Transactions', {
    lender_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lendee_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    item_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
    },
    duration: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Transactions;
};