const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();

//router.get('/', shopController.getProducts);
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCart);

module.exports = router;