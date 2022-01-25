const express = require('express');
const { engine } = require('express-handlebars');
const router = require('./app.routes');
require('dotenv').config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('./front_end/public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './front_end/src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.listen(PORT, () => console.log(`Started listening on port ${PORT}`));

module.exports = app;
