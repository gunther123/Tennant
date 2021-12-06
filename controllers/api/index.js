const router = require('express').Router();
const departmentRoutes = require('./department-routes');
const individualRoutes = require('./individual-routes');
const timecardRoutes = require('./timecard-routes');

<<<<<<< HEAD
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

=======
>>>>>>> 0c5157ccd0c5fd89de6ddee932e79a790778f1ce
router.use('/departments', departmentRoutes);
router.use('/individuals', individualRoutes);
router.use('/timecards', timecardRoutes);

module.exports = router;