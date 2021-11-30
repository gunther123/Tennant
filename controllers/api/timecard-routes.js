const router = require('express').Router();
const { Timecard } = require('../../models');

// Get all Dept's Route
router.get('/', (req, res) => {
    // Find all Timecards
    Timecard.findAll()
      .then(dbGetData => res.json(dbGetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;