const router = require('express').Router();
const departmentRoutes = require('./department-routes');
const individualRoutes = require('./individual-routes');
const timecardRoutes = require('./timecard-routes');

router.get('/', function (req, res) {
  res.render('home');
});
router.get('/login', function (req, res) {
  res.render('login');
});
router.use('/departments', departmentRoutes);
router.use('/people', individualRoutes);
router.use('/timecards', timecardRoutes);

module.exports = router;