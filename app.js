const express = require('express');

const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const homeRouter = require('./routes/homeRoutes');
const fibonacciRouter = require('./routes/fibonacciRoutes');

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use('/', homeRouter);
app.use('/api/v1/get_fibonacci', fibonacciRouter);

module.exports = app;
