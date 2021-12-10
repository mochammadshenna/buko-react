const router = require('express').Router();
const ItemController = require('../controllers/item');
const { authentication } = require('../middlewares/authentication');

router.get('/', ItemController.getItems);
router.get('/:id', ItemController.getItem);

router.use(authentication);

router.post('/', ItemController.createItem);
router.put('/:id', ItemController.updateItem);
router.delete('/:id', ItemController.deleteItem);

module.exports = router;
