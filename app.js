const express = require('express');
const router = require('./app.routes');
const exphbs  = require('express-handlebars');
require('dotenv').config({ path: './.env'});


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./front_end/public'));
app.set('views', './front_end/src/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.use(router);
app.listen(PORT, () => console.log(`Started listening on port ${PORT}`))

module.exports = app;
