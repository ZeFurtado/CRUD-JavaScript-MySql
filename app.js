const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const handlebars = require("express-handlebars");
const app = express();
const urlencoder=bodyParser.urlencoder({extend:false});
const bancoDeDados = mysql.createConnection(
    {
        host:"localhost",
        user: "root",
        password: "",
        port: 3306

    })

bancoDeDados.query("use diambaboy");
const path = require("path");



//Template engine
app.engine("handlebars", handlebars.engine({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname+"/public")));

//Routes and Templates
app.get("/", function(req,res){res.render("telaInicial")});
app.get("/telaDeCadastro", function(req, res){res.render('telaDeCadastro')});
app.post("/controllerForm")
app.listen(3000,function(req,res){console.log("Server is runin");})


