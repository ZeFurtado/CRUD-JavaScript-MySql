const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
var path = require('path');


//Template engine
app.engine("handlebars", handlebars.engine({defaultLayout:'cadastro'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname+'/public')));


//Routes and Templates
app.get("/", function(req,res)
{
    res.render('telaDeCadastro');
})

app.listen(3000,function(req,res)
{
    console.log('Server is runin');
})


