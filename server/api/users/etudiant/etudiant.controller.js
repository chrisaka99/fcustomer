const { create, getUserById } = require("./etudiant.service");
const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  createEtu: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.mdp = hashSync(body.mdp, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        message: results,
      });
    });
  },

  getEtuById: (req, res) => {
    const etu_id = req.params.etu_id;
    getUserById(etu_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found!",
        });
      } else {
        return res.json({
          success: 1,
          data: results,
        });
      }
    });
  },

  login: (req, res) => {
    const body = req.body;
    getUserById(body.etu_id, (err, results) => {
      if (err) console.log(err);
      if (!results) {
        return res.json({
          success: 0,
          message: "Invalid email or password",
        });
      }
      const result = compareSync(body.mdp, results.mdp);
      if (result) {
        results.password = undefined;
        const jsontoken = jwt.sign({ result: results }, "ransom169", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "logged in succesfully",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          message: "ERROR LOGGING IN",
        });
      }
    });
  },
};
