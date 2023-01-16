"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //adding voter-id column
    await queryInterface.addColumn("Answers", "voterID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Answers", {
      fields: ["voterID"],
      type: "foreign key",
      references: {
        table: "Voters",
        field: "id",
      },
    });

    //adding election id column
    await queryInterface.addColumn("Answers", "electionID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Answers", {
      fields: ["electionID"],
      type: "foreign key",
      references: {
        table: "Elections",
        field: "id",
      },
    });

    //adding question id column
    await queryInterface.addColumn("Answers", "questionID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Answers", {
      fields: ["questionID"],
      type: "foreign key",
      references: {
        table: "Questions",
        field: "id",
      },
    });

    //adding selected option column
    await queryInterface.addColumn("Answers", "selectedOption", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Answers", {
      fields: ["selectedOption"],
      type: "foreign key",
      references: {
        table: "Options",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    //dropping voter id column
    await queryInterface.removeColumn("Answers", "voterID");
    //dropping election id column
    await queryInterface.removeColumn("Answers", "electionID");
    //dropping question id column
    await queryInterface.removeColumn("Answers", "questionID");
    //dropping selected option column
    await queryInterface.removeColumn("Answers", "selectedOption");
  },
};