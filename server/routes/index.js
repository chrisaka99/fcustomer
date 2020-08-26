var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../db/mysql");
const {
  validateRegister,
  isLoggedIn,
  validateAdminRegister,
  validateQuestion,
} = require("../middleware/user");

//?::::::::::::::::::::::::::::::::::::: USER ROUTES ::::::::::::::::::::::::::::::::::::::::::::://

router.post("/login", function (req, res, next) {
  db.query(
    "SELECT * FROM user WHERE user_id = ?;",
    [req.body.user_id],
    (error, result) => {
      if (error) {
        // throw error;
        return res.send({
          msg: error,
        });
      }

      if (!result.length) {
        // console.log("ERR");
        return res.status(401).send({
          msg: "Identifiant ou Mot de passe incorrect",
        });
      }

      // console.log(req.body.mdp);
      bcrypt.compare(req.body.mdp, result[0].mdp, (bError, bResult) => {
        if (bError) {
          // throw bError;
          return res.send({
            msg: bError,
          });
        }
        // console.log(bResult);
        if (bResult) {
          const token = jwt.sign(
            {
              id: result[0].id,
              user_id: result[0].user_id,
              // mdp: result[0].mdp,
              email: result[0].email,
              inscrit: result[0].inscrit,
              statut: result[0].statut,
              nom: result[0].nom,
              prenoms: result[0].prenoms,
              dateNais: result[0].dateNais,
              sexe: result[0].sexe,
              promotion: result[0].promotion,
            },
            "MEINSEKRET",
            { expiresIn: "7d" }
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
        return res.status(401).send({
          msg: "L'identifiant existe déjà.",
        });
      } else {
        //? ALORS ON ENREGISTRE UN NOUVEL UTILISATEUR
        bcrypt.hash(req.body.mdp, 10, (err, hash) => {
          if (err) {
            return res.send({
              msg: err,
            });
          } else {
            if (req.body.statut === "client") {
              db.query(
                "INSERT INTO user(user_id, mdp, email, inscrit, statut, nom, prenoms, dateNais, sexe, promotion) VALUES (?,?,?,now(),?,?, NULL, NULL, NULL, NULL);",
                [
                  req.body.user_id,
                  hash,
                  req.body.email,
                  req.body.statut,
                  req.body.nom,
                ],
                (err, result) => {
                  if (err) {
                    // console.log(result);
                    // throw err;
                    return res.send({
                      msg: err,
                    });
                  }
                  return res.status(200).send({
                    msg: "Client créé!",
                  });
                }
              );
            } else if (req.body.statut === "etudiant") {
              db.query(
                "INSERT INTO user(user_id, mdp, email, inscrit, statut, nom, prenoms, dateNais, sexe, promotion) VALUES (?,?,?,now(),?,?,?,?,?,?);",
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
                  // console.log(result);
                  if (err) {
                    // throw err;
                    return res.send({
                      msg: err,
                    });
                  }
                  return res.status(200).send({
                    msg: "Etudiant créé!",
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

router.get("/user", (req, res, next) => {
  let token = req.headers.token;
  jwt.verify(token, "MEINSEKRET", (err, decode) => {
    // console.log(decode);
    if (err) {
      return res.json({
        title: "Non autorisé",
      });
    }
    return res.json({
      id: decode.id,
      user_id: decode.user_id,
      mdp: decode.mdp,
      nom: decode.nom,
      remdp: decode.remdp,
      email: decode.email,
      statut: decode.statut,
      prenom: decode.prenoms,
      dateNais: decode.dateNais,
      sexe: decode.sexe,
      promotion: decode.promotion,
    });
    // console.log(decode.nom);
  });
});

router.get("/secret-route", isLoggedIn, function (req, res, next) {
  // console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

//?::::::::::::::::::::::::::::::::::::: FONCTIONNALITY ROUTES ::::::::::::::::::::::::::::::::::::::::::::://

router.post("/preoccupation", (req, res, next) => {
  // console.log(req.body);
  db.query(
    "SELECT id FROM user WHERE user_id = ?",
    [req.body.user_id],
    (err, result) => {
      if (err) return res.json({ msg: "Erreur de soumission" });
      if (result) {
        // console.log(result[0].id);
        db.query(
          "INSERT INTO preoccupation(service, text, id_user) VALUES(?,?,?)",
          [req.body.service, req.body.text, result[0].id],
          (err, result1) => {
            if (err) return res.json({ msg: "Erreur de soumission" });
            if (result1) return res.json({ msg: "Préoccupation soumise !" });
          }
        );
      }
    }
  );
});

router.get("/list_preo", (req, res, next) => {
  db.query(
    "SELECT * FROM preoccupation WHERE id_user = ?",
    [req.body.id],
    (err, result) => {
      if (err) {
        return res.status(401).json({ msg: err });
      }
      if (result) {
        return res
          .status(200)
          .json({ msg: "preoccupation list got", list: result });
      }
    }
  );
});

router.post("/suggestions", (req, res, next) => {
  // console.log(req.body);
  db.query(
    "SELECT id FROM user WHERE user_id = ?",
    [req.body.user_id],
    (err, result) => {
      if (err) return res.json({ msg: "Erreur de soumission" });
      if (result) {
        // console.log(result);
        db.query(
          "INSERT INTO suggestions(service, text, id_user) VALUES(?,?,?)",
          [req.body.service, req.body.text, result[0].id],
          (err, result1) => {
            if (err) return res.json({ msg: "Erreur de soumission" });
            if (result1) return res.json({ msg: "Suggestion soumise !" });
          }
        );
      }
    }
  );
});

router.get("/list_suggest", (req, res, next) => {
  console.log(req.body);
  db.query(
    "SELECT * FROM suggestions WHERE id_user = ?",
    [req.body.id_user],
    (err, result) => {
      if (err) {
        return res.status(401).json({ msg: err });
      }
      if (result) {
        console.log(result);
        return res
          .status(200)
          .json({ msg: "suggestions list got", list: result });
      }
    }
  );
});

//?::::::::::::::::::::::::::::::::::::: ADMIN ROUTES ::::::::::::::::::::::::::::::::::::::::::::://

router.post("/addAdmin", validateAdminRegister, (req, res, next) => {
  db.query(
    "SELECT * FROM admin WHERE LOWER(admin_id) = LOWER(?);",
    [req.body.admin_id],
    (error, result) => {
      if (result.length) {
        return res.status(401).send({
          msg: "L'identifiant existe déjà.",
        });
      } else {
        //? ALORS ON ENREGISTRE UN NOUVEL ADMIN
        bcrypt.hash(req.body.mdp, 10, (err, hash) => {
          if (err) {
            return res.send({
              msg: err,
            });
          } else {
            db.query(
              "INSERT INTO admin(admin_id, mdp, nom, prenoms, email) VALUES (?,?,?,?,?);",
              [
                req.body.admin_id,
                hash,
                req.body.nom,
                req.body.prenoms,
                req.body.email,
              ],
              (err, result) => {
                if (err) {
                  // console.log(result);
                  // throw err;
                  return res.status(401).send({
                    msg: err,
                  });
                }
                return res.status(200).send({
                  msg: "Admin créé!",
                });
              }
            );
          }
        });
      }
    }
  );
});

router.post("/loginAdmin", function (req, res, next) {
  db.query(
    "SELECT * FROM admin WHERE admin_id = ?;",
    [req.body.admin_id],
    (error, result) => {
      if (error) {
        // throw error;
        return res.send({
          msg: error,
        });
      }

      if (!result.length) {
        // console.log("ERR");
        return res.status(401).send({
          msg: "Identifiant ou Mot de passe incorrect",
        });
      }

      // console.log(req.body.mdp);
      bcrypt.compare(req.body.mdp, result[0].mdp, (bError, bResult) => {
        if (bError) {
          // throw bError;
          return res.send({
            msg: bError,
          });
        }

        if (bResult) {
          const tokenAdmin = jwt.sign(
            {
              admin_id: result[0].admin_id,
              mdp: result[0].mdp,
              nom: result[0].nom,
              prenom: result[0].mdp,
              email: result[0].email,
              id: result[0].id,
            },
            "MEINSEKRET1",
            { expiresIn: "7d" }
          );

          // console.log(result[0]);
          return res.status(200).send({
            msg: "Admin connecté",
            tokenAdmin,
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

router.get("/admin", (req, res, next) => {
  let tokenAdmin = req.headers.token;
  // console.log(tokenAdmin);
  jwt.verify(tokenAdmin, "MEINSEKRET1", (err, decode) => {
    // console.log(decode);
    if (err) {
      return res.json({
        msg: "Non autorisé",
      });
    }
    // console.log("okok");
    return res.json({
      msg: "Connecté",
      admin_id: decode.admin_id,
      nom: decode.nom,
      prenoms: decode.prenoms,
      email: decode.email,
      mdp: decode.mdp,
      id: decode.id,
    });
  });
});

router.get("/preo", (req, res, next) => {
  db.query(
    "SELECT preoccupation.id_user, preoccupation.service, preoccupation.text, user.nom, user.prenoms, user.statut FROM preoccupation INNER JOIN user ON preoccupation.id_user = user.id",
    (err, result) => {
      if (err) {
        return res.status(500).json({
          msg: "Erreur",
          erreur: err,
        });
      }

      if (result) {
        // console.log(result);
        return res.status(200).json({
          msg: "succès",
          listpreo: result,
        });
      }
    }
  );
});

router.get("/list-users", (req, res, next) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      return res.status(500).json({
        msg: "Erreur",
        erreur: err,
      });
    }

    if (result) {
      for (i = 0; i < result.length; i++) {
        result[i].prenoms
          ? (result[i].fullname = result[i].nom + " " + result[i].prenoms)
          : (result[i].fullname = result[i].nom);
      }
      // console.log(result);
      return res.status(200).json({
        msg: "liste users receuillie",
        listusers: result,
      });
    }
  });
});

router.get("/list-admin", (req, res, next) => {
  db.query("SELECT * FROM admin", (err, result) => {
    if (err) {
      return res.status(500).json({
        msg: "Erreur",
        erreur: err,
      });
    }

    if (result) {
      for (i = 0; i < result.length; i++) {
        result[i].prenoms
          ? (result[i].fullname = result[i].nom + " " + result[i].prenoms)
          : (result[i].fullname = result[i].nom);
        result[i].statut = "Administrateur";
      }
      // console.log(result);
      return res.status(200).json({
        msg: "liste admin receuillie",
        listadmin: result,
      });
    }
  });
});

router.post("/question", validateQuestion, (req, res, next) => {
  db.query(
    "INSERT INTO question(content, id_admin) VALUES(?, ?)",
    [req.body.content, req.body.id_admin],
    (err, result) => {
      if (err) {
        return res.send({
          msg: err,
        });
      }

      if (result) {
        // console.log(result);
        return res.status(200).send({
          msg: "Question ajoutée",
        });
      }
    }
  );
});

router.get("/question", (req, res, next) => {
  db.query("SELECT * FROM question", (err, result) => {
    if (err) {
      return res.status(401).json({ msg: err });
    }
    if (result) {
      return res.status(200).json({ msg: "QUESTIONS LIST GOT!", list: result });
    }
  });
});

router.get("/question/:id", (req, res, next) => {
  db.query(
    "SELECT * FROM question WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(401).json({ msg: err });
      }
      if (result) {
        return res
          .status(200)
          .json({ msg: "QUESTIONS LIST GOT!", list: result });
      }
    }
  );
});

router.post("/questionVue", (req, res, next) => {
  db.query(
    "SELECT DISTINCT reponses.content, user.nom, user.prenoms, user.statut FROM reponses INNER JOIN question ON reponses.id_question = ? INNER JOIN user ON user.id = reponses.id_user",
    [req.body.id],
    (err, result) => {
      if (err) {
        return res.status(401).json({ msg: err });
      }
      if (result) {
        return res
          .status(200)
          .json({ msg: "QUESTIONS LIST GOT!", list: result });
      }
    }
  );
});

module.exports = router;
