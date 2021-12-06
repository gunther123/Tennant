const router = require('express').Router();
const departmentRoutes = require('./department-routes');
const individualRoutes = require('./individual-routes');
const timecardRoutes = require('./timecard-routes');

router.use('/departments', departmentRoutes);
router.use('/individuals', individualRoutes);
router.use('/timecards', timecardRoutes);

module.exports = router;