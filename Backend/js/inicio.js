"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var gatos = require('../../src/app/datos.json');
var port = 3759;
var app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.get('/', function (req, res) {
    res.send(gatos);
});
app.post('/a', function (req, res) {
    console.log(req.body);
    gatos.push(req.body);
});
app.post('/b', function (req, res) {
    console.log("3 eliminado");
    for (var i = 0; i < gatos.length; i++) {
        if ((req.body.estado == gatos[i].estado) && (req.body.titulo == gatos[i].titulo) && (req.body.descripcion == gatos[i].descripcion)) {
            console.log("un texto", gatos[i]);
            gatos.splice(i, 1);
            break;
        }
    }
});
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
