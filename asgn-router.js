const express = require('express');
var controller = require("./asgn-controller.js")

let router = express.Router();

router.get("/", function (req, res) {
    res.json({
        status: "API is working.",
        message: "Welcome to the Assignment API"});
});

router.route("/assignments")
    .get(controller.index)
    .post(controller.new);

router.route("/assignments/:assignment_id")
    .get(controller.view)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;