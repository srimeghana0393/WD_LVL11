"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //database table to store answers
    await queryInterface.createTable("Answers", {
        //id for answers table
        id: {
            allowNull: false, //should not allow empty
            autoIncrement: true,
            primaryKey: true, //acts as primary key for the table
            type: Sequelize.INTEGER, //number
        },
        //column to store date when the table is created
        createdAt: {
            allowNull: false, //should not allow empty
            type: Sequelize.DATE,
        },
        //column to store date when the table is updated
        updatedAt: {
            allowNull: false, //should not allow empty
            type: Sequelize.DATE,
        },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Answers");
  },
};