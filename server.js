// Front end dependency
const path = require('path');
// Backend required dependencies
const express = require('express');
// adding express-session and sequelize store
const session = require('express-session');
// added to use handlebars for html
const exphbs = require('express-handlebars');

//* import new fileupload tool.
const fileUpload = require('express-fileupload');

// Express
const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const sess = {
   secret: 'Super secret secret',
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
      db: sequelize,
   }),
};

// middleware for sessions
app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

// adding handlebars for generating html
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware for backend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// adding middleware for public folder to send front end files
app.use(express.static(path.join(__dirname, 'public')));

// * New Express FileUpload Middleware
//app.use(fileUpload());

app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
   app.listen(PORT, () => console.log('Now listening in port: ', PORT));
});
