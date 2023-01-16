"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Options extends Model {
    static getOptions(questionID) {
      return this.findAll({
        where: {
          questionID,
        },
        order: [["id", "ASC"]],
      });
    }

    static getOption(id) {
      return this.findOne({
        where: {
          id,
        },
      });
    }

    static addOption({ option, questionID }) {
      return this.create({
        option,
        questionID,
      });
    }

    static updateOption({ option, id }) {
      return this.update(
        {
          option,
        },
        {
          where: {
            id,
          },
        }
      );
    }

    static deleteOption(id) {
      return this.destroy({
        where: {
          id,
        },
      });
    }

    static associate(models) {
      Options.belongsTo(models.Questions, {
        foreignKey: "questionID",
        onDelete: "CASCADE",
      });
    }
  }
  Options.init(
    {
      option: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Options",
    }
  );
  return Options;
};
