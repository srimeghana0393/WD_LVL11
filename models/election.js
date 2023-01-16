"use strict";
const { Model, where } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Election extends Model {
    static addElection({ electionName, adminID }) {
      return this.create({
        electionName,
        adminID,
      });
    }

    static getElections(adminID) {
      return this.findAll({
        where: {
          adminID,
        },
        order: [["id", "ASC"]],
      });
    }

    static getElection(id) {
      return this.findOne({
        where: {
          id,
        },
      });
    }
    
    static Launchelection(id) {
      return this.update(
        {
          running: true,
        },
        {
          returning: true,
          where: {
            id,
          },
        }
      );
    }
    static associate(models) {
      Election.belongsTo(models.Admin, {
        foreignKey: "adminID",
      });

      Election.hasMany(models.Questions, {
        foreignKey: "electionID",
      });

      Election.hasMany(models.Voter, {
        foreignKey: "electionID",
      });
    }
  }
  Election.init(
    {
      electionName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urlString: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      running: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      ended: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Election",
    }
  );
  return Election;
};
