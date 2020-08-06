var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../db/mysql");
const { validateRegister, isLoggedIn } = require("../middleware/user");

/* GET home page. */
router.post("/login", function (req, res, next) {
  db.query(
    "SELECT * FROM user WHERE user_id = ?;",
    [req.body.user_id],
    (error, result) => {
      if (error) {
        // throw error;
        return res.status(400).send({
          msg: error,
        });
      }

      if (!result.length) {
        // console.log("ERR");
        return res.status(401).send({
          msg: "Identifiant ou Mot de passe incorrect",
        });
      }

      console.log(req.body.mdp);
      bcrypt.compare(req.body.mdp, result[0].mdp, (bError, bResult) => {
        if (bError) {
          // throw bError;
          return res.status(401).send({
            msg: bError,
          });
        }
        console.log(bResult);
        if (bResult) {
          const token = jwt.sign(
            {
              user_id: result[0].user_id,
              mdp: result[0].mdp,
              email: result[0].email,
              inscrit: result[0].inscrit,
              statut: result[0].statut,
              nom: result[0].nom,
              prenoms: result[0].prenoms,
              dateNais: result[0].dateNais,
              sexe: result[0].sexe,
              matiere: result[0].matiere,
              promotion: result[0].promotion,
            },
            "MEINSEKRET",
            { expiresIn: "1h" }
          );

          // db.query("UPDATE user SET last_login = now() WHERE user_id = ?", [
          //   result.user_id,
          // ]);

          return res.status(200).send({
            msg: "Utilisateur connecté",
            token,
            user: result[0],
          });
        }

        return res.status(401).send({
          msg: "L'identifiant ou le Mot de passe est incorrect",
        });
      });
    }
  );
});

router.post("/register", validateRegister, function (req, res, next) {
  //? ON VERIFIE D'ABORD SI L'IDENTIFIANT EXISTE DANS LA DATABASE
  db.query(
    "SELECT * FROM user WHERE LOWER(user_id) = LOWER(?);",
    [req.body.user_id],
    (error, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "L'identifiant existe déjà.",
        });
      } else {
        //? ALORS ON ENREGISTRE UN NOUVEL UTILISATEUR
        bcrypt.hash(req.body.mdp, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            if (req.body.statut === "client") {
              db.query(
                "INSERT INTO user(user_id, mdp, email, inscrit, statut, nom, prenoms, dateNais, sexe, matiere, promotion) VALUES (?,?,?,now(),?,?, NULL, NULL, NULL, NULL,NULL);",
                [
                  req.body.user_id,
                  hash,
                  req.body.email,
                  req.body.statut,
                  req.body.nom,
                ],
                (err, result) => {
                  if (err) {
                    console.log(result);
                    // throw err;
                    return res.status(400).send({
                      msg: err,
                    });
                  }
                  return res.status(201).send({
                    msg: "Client créé!",
                  });
                }
              );
            } else if (req.body.statut === "etudiant") {
              db.query(
                "INSERT INTO user(user_id, mdp, email, inscrit, statut, nom, prenoms, dateNais, sexe, matiere, promotion) VALUES (?,?,?,now(),?,?,?,?,?,NULL,?);",
                [
                  req.body.user_id,
                  hash,
                  req.body.email,
                  req.body.statut,
                  req.body.nom,
                  req.body.prenoms,
                  req.body.dateNais,
                  req.body.sexe,
                  req.body.promotion,
                ],
                (err, result) => {
                  console.log(result);
                  if (err) {
                    // throw err;
                    return res.status(400).send({
                      msg: err,
                    });
                  }
                  return res.status(201).send({
                    msg: "Etudiant créé!",
                  });
                }
              );
            } else if (req.body.statut === "enseignant") {
              db.query(
                "INSERT INTO user(user_id, mdp, email, inscrit, statut, nom, prenoms, dateNais, sexe, matiere, promotion) VALUES (?,?,?,now(),?,?,?,NULL,?,?,NULL);",
                [
                  req.body.user_id,
                  hash,
                  req.body.email,
                  req.body.statut,
                  req.body.nom,
                  req.body.prenoms,
                  req.body.sexe,
                  req.body.matiere,
                ],
                (err, result) => {
                  console.log(result);
                  if (err) {
                    // throw err;
                    return res.status(400).send({
                      msg: err,
                    });
                  }
                  return res.status(201).send({
                    msg: "Enseignant créé!",
                  });
                }
              );
            }
          }
        });
      }
    }
  );
});

router.get("/secret-route", isLoggedIn, function (req, res, next) {
  console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

module.exports = router;
