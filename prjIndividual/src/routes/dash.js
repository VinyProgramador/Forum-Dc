var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/dash", function (req, res) {
    dashController.buscarQtdUsuarios(req, res);
});

module.exports = router;