const router = require('express').Router();
const { Department } = require('../../models');

// Get all Dept's Route
router.get('/', (req, res) => {
    // Find all Department's
    Department.findAll()
      .then(dbGetData => res.json(dbGetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Get specific Dept Route
router.get('/:id', (req, res) => {
    Department.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbGetData => {
        if (!dbGetData) {
          res.status(404).json({ message: 'No department found'}); 
          return; 
        }
        res.json(dbGetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;