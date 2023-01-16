'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  //adding the admin id column 
    await queryInterface.addColumn("Elections", "adminID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Elections", {
      fields: ["adminID"],
      type: "foreign key",
      references: {
        table: "Admins",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    //dropping the adminid column 
    await queryInterface.removeColumn("Elections", "adminID");
  },
};
