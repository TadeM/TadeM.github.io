const sql = require("./db.js");

// constructor
const DictionaryEntity = function(entry) {
  this.word = entry.word;
  this.wordtype = entry.wordtype;
  this.definition = entry.definition;
};

DictionaryEntity.findByWord = (word, result) => {

    sql.query(`SELECT * FROM entries WHERE word = '${word}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  module.exports = DictionaryEntity;
 