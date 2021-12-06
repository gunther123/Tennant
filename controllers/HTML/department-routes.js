const router = require('express').Router();
const { Department } = require('../../models');

router.get('/', function (req, res) {
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
router.get('/new/', function (req, res) {
  res.render('departments/new', {});
});

router.get('/view/:id', function (req, res) {
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

router.get('/edit/:id', function (req, res) {
  // Get single department
  Department.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbGetData => {
      res.render('departments/edit', { department: dbGetData.dataValues })
      //console.log(dbGetData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;