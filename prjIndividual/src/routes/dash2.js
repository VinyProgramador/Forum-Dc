var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController2");

router.get("/dash2", function(req, res) {
    dashController.buscarHeroisDiferentes(req, res);
});

module.exports = router;