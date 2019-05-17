var Sequelize = require('sequelize');
var UserModel = require('./models/user');

const sequelize = new Sequelize('sakila', 'root', 'Papito01', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Users db and user table have been created');
    });

module.exports = User;