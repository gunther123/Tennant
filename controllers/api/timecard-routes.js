const router = require('express').Router();
const { Timecard } = require('../../models');

// Get all Timecards
router.get('/', (req, res) => {
    // Find all Timecards
    Timecard.findAll()
      .then(dbGetData => res.json(dbGetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Get specific Timecard
router.get('/:id', (req, res) => {
    Timecard.findOne({
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