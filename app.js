const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');

const app = express();

app.use(express.static('public'));

app.listen(3000,function(req,res)
{
    console.log('Server is runin');
})


nome = document.getElementById('nomeInput');
sobrenome = document.getElementById('sobrenomeInput');
cpf = document.getElementById('cpfInput');
sexo = document.getElementById('sexoInput');
nomeSocial = document.getElementById('nomeSocialInput');
dataNascimento = document.getElementById('dataNascimentoInput');