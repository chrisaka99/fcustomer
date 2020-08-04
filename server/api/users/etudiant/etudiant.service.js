const con = require("../../../config/mysql");

module.exports = {
  create: (data, callback) => {
    con.query(
      "INSERT INTO etudiant(etu_id, email, mdp, nom, prenoms, dateNais, sexe) VALUES (?,?,?,?,?,?,?)",
      [
        data.etu_id,
        data.email,
        data.mdp,
        data.nom,
        data.prenoms,
        data.dateNais,
        data.sexe,
      ],
      (error, results, fields) => {
        if (error) return callback(error);
        return callback(null, results);
      }
    );
  },

  getUserById: (etu_id, callback) => {
    con.query(
      "SELECT * FROM etudiant WHERE etu_id = ?",
      [etu_id],
      (error, results, fields) => {
        if (error) return callback(error);
        return callback(null, results[0]);
      }
    );
  },
};
