const express = require("express");
const router = express.Router();
const db = require(".././models");

//Ajouter un nouvel etudiant
router.post("/createEtudiant", (req, res, next) => {
  db.TEtudiants.create({
    Nom: req.body.Nom,
    Prenom: req.body.Prenom,
    Email: req.body.Email,
    MotDePasse: req.body.MotDePasse,
    CIN: req.body.CIN,
    Photo: req.body.Photo,
    DateDeNaissance: req.body.DateDeNaissance,
  })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Recuperer un etudiant par son ID
router.get("/etudiant:id", (req, res, next) => {
  db.TEtudiants.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Recuperer les etudiants
router.get("/etudiants", (req, res, next) => {
  db.TEtudiants.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Mettre a jour l'etudiant identifie par son ID
router.patch("/etudiants/:id", (req, res, next) => {
  db.TEtudiants.update(
    {
      Nom: req.body.Nom,
      Prenom: req.body.Prenom,
      Email: req.body.Email,
      MotDePasse: req.body.MotDePasse,
      CIN: req.body.CIN,
      Photo: req.body.Photo,
      DateDeNaissance: req.body.DateDeNaissance,
    },
    { where: { id: req.params.id } }
  )
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Supprimer/Archiver l'etudiant identifie par son id
router.delete("/etudiants/:id", (req, res, next) => {
  db.TEtudiants.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
