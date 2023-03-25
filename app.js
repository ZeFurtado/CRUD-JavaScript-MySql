const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');

const app = express();

//Template engine
app.engine("handlebars", handlebars.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use('/css',express.static('css'));
app.use('/js', express.static('js'));

//Routes and Templates
app.get("/", function(req,res)
{
    res.render('index');
})

app.get("javascript", function(req, res)
{
    res.sendFile(__dirname+"/css/style.css");
})


app.get("javascript", function(req, res)
{
    res.sendFile(__dirname+"/js/javascript.js");
})


app.listen(3000,function(req,res)
{
    console.log('Server is runin');
})


