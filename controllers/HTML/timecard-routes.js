const router = require('express').Router();
const { Timecard, Individual } = require('../../models');

router.get('/', function (req, res) {
    // Find all Department's
    Timecard.findAll()
      .then(dbGetData => {
        res.render('timecards', { timecard: dbGetData.reverse() })
        //console.log(dbGetData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  router.get('/new', function (req, res) {
    Individual.findAll()
      .then(dbGetData => {
        res.render('timecards/new', { people: dbGetData })
        //console.log(dbGetData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    //res.render('timecards/new');
  });
  router.get('/view/:id', function (req, res) {
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
  router.get('/edit/:id', function (req, res) {
    // Get single timecard
    Timecard.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbGetData => {
        res.render('timecards/edit', { timecard: dbGetData.dataValues })
        //console.log(dbGetData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;