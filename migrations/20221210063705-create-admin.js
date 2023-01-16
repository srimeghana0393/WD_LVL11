"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //table for admins
    await queryInterface.createTable("Admins", {
      //id of admin
      id: {
        allowNull: false, //cannot be empty
        autoIncrement: true,
        primaryKey: true,//id acts as a primary key
        type: Sequelize.INTEGER, //type - number
      },
      //first name of admin
      firstName: {
        type: Sequelize.STRING, //type - string
      },
      //last name of admin
      lastName: {
        type: Sequelize.STRING, //type - string
      },
      //last name of admin
      email: {
        type: Sequelize.STRING, //type - string
        allowNull: false, //cannot be empty
        unique: true, //Should be unique
      },
      //password of admin
      password: {
        type: Sequelize.STRING, //type - string
      },
      //registration date of admin
      createdAt: {
        allowNull: false, //cannot be empty
        type: Sequelize.DATE,//type - date
      },
      //Date when profile is updated of admin
      updatedAt: {
        allowNull: false, //cannot be empty
        type: Sequelize.DATE,//type - date
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Admins");
  },
};
