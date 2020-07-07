const express = require('express');
const router = express.Router();
const {
        getProduct,
        addProduct,
        updateProduct,
        deleteProduct} = require('../controllers/products.js')


router.route('/')
    .get(getProduct)
    .post(addProduct);
module.exports=router;

router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct);
module.exports=router;
