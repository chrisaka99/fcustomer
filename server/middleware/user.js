const { verify } = require("jsonwebtoken");

module.exports = {
  validateRegister: (req, res, next) => {
    body = req.body;
    if (!body.user_id || body.user_id.length < 5) {
      res.send({
        msg: "Veuillez entrez au moins 6 caractères",
      });
    }

    if (!body.mdp || body.mdp.length < 5) {
      res.send({
        msg: "Le mot de passe doit avoir au moins 6 caractères",
      });
    }

    if (!body.mdp || body.mdp !== body.remdp) {
      res.send({
        msg: "Les mots de passes doivent concorder",
      });
    }

    next();
  },

  isLoggedIn: (req, res, next) => {
    console.log("ok ok");
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, "MEINSEKRET");
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).send({
        msg: "Votre session n'est pas valide!",
      });
    }
  },
};
