const mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    courseName: {
        type: String
    },
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        default: Date.now
    }
});

var Asgn = module.exports = mongoose.model("asgn-api", contactSchema);
module.exports.get = function (callback, limit) {
    Asgn.find(callback).limit(limit);
}