const router = require('express').Router();
const CategoryController = require('../controllers/category');
const { authentication } = require('../middlewares/authentication');

router.get('/', CategoryController.getCategories);

router.use(authentication);

router.post('/', CategoryController.createCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
