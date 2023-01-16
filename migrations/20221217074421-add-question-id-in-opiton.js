'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  //adding the questionid column 
    await queryInterface.addColumn("Options", "questionID", {
      type: Sequelize.DataTypes.INTEGER,
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("Options", {
      fields: ["questionID"],
      type: "foreign key",
      onDelete: "CASCADE",
      references: {
        table: "Questions",
        field: "id",
      },
    });
    
  },

  async down(queryInterface, Sequelize) {
    //dropping the questionid column 
    await queryInterface.removeColumn("Options", "questionID");
    
  },
};
