"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var gatos = require('../../src/app/datos.json');
var port = 3758;
var app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.get('/', function (req, res) {
    res.send(gatos);
});
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
app.post('/', function (req, res) {
    console.log(req.body);
    gatos.push(req.body);
});
