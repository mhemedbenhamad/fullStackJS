const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const TEtudiants = Sequelize.define("TEtudiants", {
    Nom: {
      type: DataTypes.STRING,
    },
    Prenom: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },

    MotDePasse: {
      type: DataTypes.STRING,
    },
    CIN: {
      type: DataTypes.STRING,
    },

    Photo: {
      type: DataTypes.STRING,
    },
    DateDeNaissance: {
      type: DataTypes.DATEONLY,
    },
  });
  return TEtudiants;
};
