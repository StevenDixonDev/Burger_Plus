const express = require("express");
const exphbs = require("express-handlebars");
const static = require("serve-static");
// create new express app
const app = express();

app.use(static(__dirname + '/public'));

// define the port for the app to listen to
const PORT = process.env.PORT || 3000;

// set up handlebars on the app
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// set body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// define default route
app.get('/', (req, res) => {
    res.render('index');
})

// import routes created from app.route
const burger_route = require("./controllers/burgers_controller");

// define redirect route
app.use("/api", burger_route);

// start the express server
app.listen(PORT, ()=>{
    console.log('Server Started, listening on port: ' + PORT);
});