const Express = require('express');

// create new express app
const app = Express();

// define the port for the app to listen to
const PORT = process.env.PORT || 3000;

// define default route
app.get('/', (req, res) => {
    req.setEncoding('Hello Server')
})

// define redirect route
app.get('*', (req, res) => {
    res.redirect('/');
})

// start the express server
app.listen(PORT, ()=>{
    console.log('Server Started, listening on port: ' + PORT);
});