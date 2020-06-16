var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerObj = {
      burgers: data,
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/insertOne", function (req, res) {
  burger.insertOne(req.body.burgers_name, function (vals) {
    res.redirect("/");
  });
});
/*
router.post("/api/burgers", function (req, res) {
  burger.create([
    "buger_name", "eaten"
  ], [
    req.body.burgers_name, req.body.eaten
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
*/
router.post("/updateOne/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("Condition is = " + condition);

  burger.updateOne(
    {
      eaten: req.body.eaten,
    },
    condition,
    function () {
      res.redirect("/");
    }
  );
});

router.post("/deleteOne/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function () {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
