let express = require('express')
let app = express();
const apiRouter = require('./asgn-router.js')
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

//Set up mongoose and body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//connect to mongoose
mongoose.connect("mongodb://localhost/asgn_api", { useNewUrlParser: true});
var db = mongoose.connection;

if (!db) {
    console.log("Error connecting to the DB.");
} else {
    console.log("DB Connected Sucessfully.");
}

var port = 8080;

app.use("/api", apiRouter);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running assignments-api on port " + port);
});