const router = require('express').Router();
const authRouter = require('./auth');
const categoryRouter = require('./category');
const itemRouter = require('./item');
const errorHandler = require('../middlewares/errorHandler');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Its Work'
  })
});

router.use('/', authRouter);
router.use('/categories', categoryRouter);
router.use('/items', itemRouter);

router.use(errorHandler);


module.exports = router;
