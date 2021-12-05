//Require all node modules
const path = require('path');
const routes = require('./controllers/');
const sequelize = require('./config/connection')
var express = require('express');
const app = express();
const { Individual, Department, Timecard } = require('./models');

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

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  //Start server
  app.listen(PORT, () => {
    console.log(`*** Tennant Running! ***\n🚀 App listening on http://localhost:${PORT}!\n*********************`);
  })
});
