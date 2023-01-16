"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // database for questions table
    await queryInterface.createTable("Questions", {
      //id for questions
      id: {
        allowNull: false, //do not allow empty
        autoIncrement: true,
        primaryKey: true, //acts as primary key for the table
        type: Sequelize.INTEGER, //number
      },
      //question column to store questions
      question: {
        type: Sequelize.STRING, //string (sentence)
        allowNull: false, //should not be empty
      },
      //column to store the question description
      description: {
        type: Sequelize.STRING, //string (sentence)
      },
      //column to store the date when the question is created
      createdAt: {
        allowNull: false, //should not be empty
        type: Sequelize.DATE,
      },
      //column to store the date when the question is updated
      updatedAt: {
        allowNull: false, //should not be empty
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
