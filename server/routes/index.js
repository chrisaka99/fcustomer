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
            },
            "MEINSEKRET",
            { expiresIn: "1d" }
          );

          db.query("UPDATE user SET last_login = now() WHERE user_id = ?", [
            result.user_id,
          ]);

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
  //? ON VERIFIE D'ABORD SI L'INDENTIFIANT EXISTE DANS LA DATABASE
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
            db.query(
              "INSERT INTO user(user_id, mdp, email, inscrit) VALUES (?,?,?,now());",
              [req.body.user_id, hash, req.body.email],
              (err, result) => {
                if (err) {
                  // throw err;
                  return res.status(400).send({
                    msg: err,
                  });
                }
                return res.status(201).send({
                  msg: "Utilisateur créé!",
                });
              }
            );
          }
        });
      }
    }
  );
});

router.post("/secret-route", isLoggedIn, function (req, res, next) {
  console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

module.exports = router;
