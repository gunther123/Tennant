const router = require('express').Router();
const departmentRoutes = require('./department-routes');
const individualRoutes = require('./individual-routes');
const timecardRoutes = require('./timecard-routes');

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
})

router.use('/departments', departmentRoutes);
router.use('/individuals', individualRoutes);
router.use('/timecards', timecardRoutes);

module.exports = router;