const router = require('express').Router();
const categoryRoutes = require('./list-routes');
const productRoutes = require('./item-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
