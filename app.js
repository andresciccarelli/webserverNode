require('dotenv').config();
const { response } = require('express');
const express = require('express')
const hbs = require('hbs');
const port = process.env.PORT;






const app = express();

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andres',
        titulo: 'Curso de Node'

    });
});

app.get('/hola-mundo', (req, resp) => {
    resp.send('Hola mundo es este')
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Andres',
        titulo: 'Curso de Node'

    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Andres',
        titulo: 'Curso de Node'

    });
});

app.get('*', (req, resp) => {
    resp.sendFile(__dirname + '/public/404.html')
});
app.listen(port, () => {
    console.log('La aplicacion se inicio en el puerto:', port)
})