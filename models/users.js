const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize) => {
  const Users = sequelize.define('Users', {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    institution: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  User.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password = hashedPw;
    })
  );

  return User;
};
