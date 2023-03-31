const express = require("express");
const db = require("./models");
const Routes = require("./routers/etudiant-router");
// creer l'application express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Ajouter les  routes
app.use("/TEtudiants", Routes);
// Demarrer l'ecoute sur le port 3000
db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("serveur en écoute port 3000"));
});
