var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    const availableBudget = 10000.0;
    res.send(JSON.stringify(availableBudget));
});

router.get("/income", function (req, res, next) {
    const income = 5000.0;
    res.send(JSON.stringify(income));
});

router.get("/expense", function (req, res, next) {
    const expense = 1000.0;
    res.send(JSON.stringify(expense));
});

module.exports = router;
