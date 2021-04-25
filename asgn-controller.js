const Asgn = require("./model.js");

exports.index = function (req, res) {
    Asgn.get (function (err, assignments) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            messgae: "Assignments retrieved successfully",
            data: assignments
        });
    });
}

exports.new = function(req, res) {
    var assignment = new Asgn();
    assignment.name = req.body.courseName ? req.body.name : assignment.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;

    assignment.save (function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: 'New assignment created',
            data: assignment
        });
    });
};

exports.view = function (req, res) {
    Asgn.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Contact details loading..",
            data: assignment
        });
    });
};

exports.update = function (req, res) {
    Asgn.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        assignment.name = req.body.courseName ? req.body.name : assignment.courseName;
        assignment.assignmentName = req.body.assignmentName;
        assignment.dueDate = req.body.dueDate;

        assignment.save (function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: 'Assignment info updated',
                data: assignment
            });
        });
    });
};

exports.delete = function (req, res) {
    Asgn.remove({
        _id: req.params.assignment_id
    }, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json(
            {
                status: "success",
                message: 'Assignment deleted'
            });
    });
};