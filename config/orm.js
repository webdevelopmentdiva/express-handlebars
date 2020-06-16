// Import MySQL connection.
var connection = require("./connection");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (table, callback) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function (table, cols, vals, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, cols, vals], function (err, data) {
      if (err) throw err;
      callback(data);
    });
  },

  updateOne: function (colVal, id, callback) {
    var queryString = "UPDATE burgers SET eaten = '1' WHERE " + id + ";";
    connection.query(queryString, [id], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  deleteOne: function (id, callback) {
    var queryString = "DELETE FROM burgers WHERE " + id + ";";
    connection.query(queryString, [id], function (err, res) {
      if (err) throw err;
      callback(res);
    });
  },
};

module.exports = orm;

/*
all: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
create: function(table, cols, vals, cb) {
  var queryString = "INSERT INTO " + table;

  queryString += " (";
  queryString += cols.toString();
  queryString += ") ";
  queryString += "VALUES (";
  queryString += printQuestionMarks(vals.length);
  queryString += ") ";

  console.log(queryString);

  connection.query(queryString, vals, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
},
// An example of objColVals would be {name: panther, sleepy: true}
update: function(table, objColVals, condition, cb) {
  var queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += objToSql(objColVals);
  queryString += " WHERE ";
  queryString += condition;

  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
},
delete: function(table, condition, cb) {
  var queryString = "DELETE FROM " + table;
  queryString += " WHERE ";
  queryString += condition;

  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
}
*/
