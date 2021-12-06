const router = require('express').Router();
const { Department } = require('../../models');

// Get all Dept's Route
router.get('/', (req, res) => {
  // Find all Department's
  Department.findAll({
    //Only show active Depts
    where: {
      deleted: false
    }
  })
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
        res.status(404).json({ message: 'No department found' });
        return;
      }
      res.json(dbGetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create new Dept
router.post('/', (req, res) => {
  Department.create({
    name: req.body.name,
    deleted: req.body.deleted
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.put('/:id', (req, res) => {
  // update a Department by its `id` value
  Department.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPUTData => {
      if (!dbPUTData[0]) {
        res.status(404).json({ message: 'No department found' });
        return;
      }
      res.json(dbPUTData + " record updated");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;