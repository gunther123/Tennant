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

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/timecards', function (req, res) {
  // Find all Department's
  Timecard.findAll()
    .then(dbGetData => {
      res.render('timecards', { timecard: dbGetData })
      //console.log(dbGetData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
app.get('/timecards/new', function (req, res) {
  res.render('timecards/new');
});
app.get('/timecards/view/:id', function (req, res) {
  // Get single timecard
  Timecard.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbGetData => {
      res.render('timecards/view', { timecard: dbGetData.dataValues })
      //console.log(dbGetData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
app.get('/departments', function (req, res) {
  // Find all Department's
  Department.findAll()
    .then(dbGetData => {
      res.render('departments', { department: dbGetData })
      //console.log(dbGetData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});
app.get('/departments/new/', function (req, res) {
  res.render('departments/new', {});
});

app.get('/departments/view/:id', function (req, res) {
  // Get single department
  Department.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbGetData => {
      res.render('departments/view', { department: dbGetData.dataValues })
      //console.log(dbGetData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.get('/people', function (req, res) {
  // Get all individuals
  Individual.findAll()
    .then(dbGetData => {
      res.render('people', { people: dbGetData })
      //console.log(dbGetData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
app.get('/people/new', function (req, res) {
  // Find all Department's
  Department.findAll()
    .then(dbGetData => {
      res.render('people/new', { department: dbGetData })
      //console.log(dbGetData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  //res.render('people/new');
  
});
app.get('/people/view/:id', function (req, res) {
  // Get single individual
  Individual.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbGetData => {
      res.render('people/view', { person: dbGetData.dataValues })
      //console.log(dbGetData)
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