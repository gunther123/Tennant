//Require all node modules
const path = require('path');
const routes = require('./controllers/');
const sequelize = require('./config/connection')
var express = require('express');
const app = express();
const { Individual } = require('./models');

//Middleware setup
const PORT = process.env.PORT || 3001;

//Load the handlebars module
var exphbs = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/timecards', function (req, res) {
    res.render('timecards');
});
app.get('/departments', function (req, res) {
    res.render('departments');
});

app.get('/people', function (req, res) {
    // Get all individuals
    Individual.findAll()
      .then(dbGetData => { res.render('people', {people: dbGetData})
      console.log(dbGetData)
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

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


    // res.render('people', { people: [
    //     { id: 1, first: "Lowell", last: "Bennett", email: "LowellABennett@jourrapide.com" },
    //     { id: 2, first: "Diane", last: "Shea", email: "DianeWShea@armyspy.com" },
    //     { id: 5, first: "Jarrod", last: "Spoon", email: "JarrodDSpoon@dayrep.com" }
    // ]});