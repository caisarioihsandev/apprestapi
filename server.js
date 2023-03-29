const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parser application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil routes
var routes = require('./routes');
routes(app);

let port = '3000';
app.listen(port, () => {
    console.log(`Server started on ${port}`)
})