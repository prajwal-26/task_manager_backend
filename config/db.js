// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_management', 'root', 'bablu', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
