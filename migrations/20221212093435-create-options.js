"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //database for options
    await queryInterface.createTable("Options", {
      // id for options
      id: {
        allowNull: false, //should not allow empty
        autoIncrement: true,
        primaryKey: true, //acts as the primary key
        type: Sequelize.INTEGER, //number
      },
      //column to enter option
      option: {
        type: Sequelize.STRING, //string (sentence)
        allowNull: false, //should not allow empty
      },
      //column to store date at which option is created
      createdAt: {
        allowNull: false, //should not allow empty
        type: Sequelize.DATE,
      },
      //column to store date at which option is updated
      updatedAt: {
        allowNull: false, //should not allow empty
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Options");
  },
};
