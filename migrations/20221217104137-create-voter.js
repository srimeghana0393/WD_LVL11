"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //database table for voters
    await queryInterface.createTable("Voters", {
      //id for voters
      id: {
        allowNull: false, //should not allow empty
        autoIncrement: true,
        primaryKey: true, //acts as primary key of the table
        type: Sequelize.INTEGER, //number
      },
      //unique voter id for each voter
      voterid: {
        type: Sequelize.STRING, //string
        allowNull: false, //should not allow empty
      },
      //password for each voter
      password: {
        type: Sequelize.STRING, //string
        allowNull: false, //should not allow empty
      },
      //column to note if the voter has given vote or not
      voted: {
        type: Sequelize.BOOLEAN, //true or false
        allowNull: false, //should not allow empty
        defaultValue: false, //by default marks as no vote given
      },
      //column to store the date when the table is created
      createdAt: {
        allowNull: false, //should not allow empty
        type: Sequelize.DATE,
      },
      //column to store the date when the table is updated
      updatedAt: {
        allowNull: false, //should not allow empty
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Voters");
  },
};
