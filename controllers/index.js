const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./HTML')

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;