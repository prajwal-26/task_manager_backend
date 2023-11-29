const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Task.sync()
  .then(() => {
    console.log("Task model synced with the database");
  })
  .catch((err) => {
    console.error("Error syncing Task model:", err);
  });

module.exports = Task;
