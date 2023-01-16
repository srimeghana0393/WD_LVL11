"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //database for Elections
    await queryInterface.createTable("Elections", {
      //id for elections
      id: {
        allowNull: false, //do not allow empty 
        autoIncrement: true,
        primaryKey: true, //id is the primary key
        type: Sequelize.INTEGER, //number
      },
      //election title
      electionName: {
        type: Sequelize.STRING, //string
        allowNull: false, //do not allow empty
      },
      //url String
      urlString: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      //whether election is running or not
      running: {
        type: Sequelize.BOOLEAN, //true or false
      },
      //whether election has ended or not
      ended: {
        type: Sequelize.BOOLEAN, //true or false
        defaultValue: false, //by default it is considered as false
      },
      //time when table is created
      createdAt: {
        allowNull: false, //do not allow empty 
        type: Sequelize.DATE, //date
      },
      //time when table is updates
      updatedAt: {
        allowNull: false, //do not allow empty 
        type: Sequelize.DATE, //date
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Elections");
  },
};
