const router = require('express').Router();
const { Individual } = require('../../models');

// Get all Individuals
router.get('/', (req, res) => {
    // Find all Timecards
    Individual.findAll()
      .then(dbGetData => res.json(dbGetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Get specific Individual by Id
router.get('/:id', (req, res) => {
    Individual.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbGetData => {
        if (!dbGetData) {
          res.status(404).json({ message: 'No timecard found'}); 
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