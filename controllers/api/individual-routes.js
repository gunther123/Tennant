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

//Create new Dept
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

module.exports = router;