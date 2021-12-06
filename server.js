//Require all node modules
const path = require('path');
const routes = require('./controllers/');
const sequelize = require('./config/connection')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

var express = require('express');
const app = express();
const { Individual, Department, Timecard } = require('./models');

const sess = {
  secret: process.env.SESS_PW,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//Middleware setup
const PORT = process.env.PORT || 3001;

//Load the handlebars module
var exphbs = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
//return session detail to handlebars
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  //Start server
  app.listen(PORT, () => {
    console.log(`*** Tennant Running! ***\n🚀 App listening on http://localhost:${PORT}!\n*********************`);
  })
});
