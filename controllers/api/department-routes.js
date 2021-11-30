const router = require('express').Router();
const { Department } = require('../../models');

router.get('/', (req, res) => {
    // Find all Department's
    Department.findAll({
      include: [
        {
          model: Department,
          attributes: ['id', 'name', 'deleted']
        }
      ]
    })
      .then(dbGetData => res.json(dbGetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;