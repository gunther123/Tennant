const router = require('express').Router();
const { Department, Individual } = require('../../models');

router.get('/', function (req, res) {
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
  router.get('/new', function (req, res) {
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
  router.get('/view/:id', function (req, res) {
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
  
  router.get('/edit/:id', function (req, res) {
    // Get single individual
    Individual.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbGetData => {
        res.render('people/edit', { person: dbGetData.dataValues })
        //console.log(dbGetData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;