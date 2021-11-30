const router = require('express').Router();
const { Individual } = require('../../models');

// Get all Timecards
router.get('/', (req, res) => {
    // Find all Timecards
    Individual.findAll()
      .then(dbGetData => res.json(dbGetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;