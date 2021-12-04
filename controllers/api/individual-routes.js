const router = require('express').Router();
const { Individual, Department } = require('../../models');

// Get all Individuals
router.get('/', (req, res) => {
    // Find all Timecards
    Individual.findAll({
      where: {
        disabled:false
      },
      include: {
        model: Department,
        attributes: ['name']
      }
    })
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
      },
      include: {
        model: Department,
        attributes: ['name']
      }
    })
      .then(dbGetData => {
        if (!dbGetData) {
          res.status(404).json({ message: 'No individual found'}); 
          return; 
        }
        res.json(dbGetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Create new Individual
router.post('/', (req, res) => {
  Individual.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    nickname: req.body.nickname,
    start_date: req.body.start_date,
    department_id: req.body.department_id,
    email: req.body.email,
    last_modified: req.body.last_modified,
    username: req.body.username,
    password: req.body.password,
    disabled: req.body.disabled,
    last_login: req.body.last_login,
    notes: req.body.notes
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });

//Update Individual
router.put('/:id', (req, res) => {
  // update an Individual by its `id` value
  Individual.update(req.body, {
    where: {
        id: req.params.id
    }
  })
    .then(dbPUTData => {
        if (!dbPUTData[0]) {
            res.status(404).json({ message: 'No Individual found'});
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