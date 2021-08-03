const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
//const { Console } = require('console');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const validator = require('express-validator');
const MongoStore = require('connect-mongo')(session);
const route = require('./routes/index');
const db = require('./config/db');



// connect database
db.connect();
const app = express(); //Framework
const port = 3000

// public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/* app.use(validator()); */
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(
  express.urlencoded({
    extended: true,
  }
));
app.use(express.json());

app.use(methodOverride('_method'));
// HTTP logger
//app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

//127.0.0.1 - http://localhost:3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

//package.json
/* "watch": "node-sass --watch src/resources/scss/ --output src/public/css/", */