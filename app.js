const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');

const path = require('path');
const app = express();

app.get('/', function(request, response){
    response.sendFile('C:/Users/lukha/source/repos/CRUD-JavaScript-MySql/public/register.html');
    
});


app.listen(3000,function(req,res)
{
    console.log('Server is runin');
})