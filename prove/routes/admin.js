const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const productsArray = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); 
/*router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    title: 'Add Product',
    products: productsArray,
    path: '/add-product', // For pug, EJS
    //activeTA03: true, // For HBS
    //contentCSS: true, // For HBS
  });
});
*/


// /admin/add-product => POST
/*router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
}); */

router.post('/add-product', (req, res, next) => {
  const newProduct = req.body.newProduct;

  userArray.push(newProduct);

  res.redirect('/');
});


router.get('/', (req, res, next) => {
  res.render('views/shop', {
    title: 'Shop',
    products: productsArray,
    path: '/shop', // For pug, EJS
    //activeTA03: true, // For HBS
    //contentCSS: true, // For HBS
  });
});

module.exports = router;
