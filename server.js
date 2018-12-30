const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Middleware - Instruccion o callback que se va ejecutar siempre

app.use(express.static(__dirname + '/public'));

// Handlebars declaration
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    // El .render() permite setear una vista y a su vez pasarle parámetros para poder
    // utilizarlos en la propia vista
    res.render('home', { name: 'fernando' });

});

app.get('/about', function(req, res) {
    res.render('about')
});

app.listen(port, () => {
    console.log(`Se ha lenvando el server en el puerto ${port}.`);
});