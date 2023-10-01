const express = require('express');
const router = express.Router();

// Import controller functions
const adminController = require('../Controllers/adminController');
const postController = require('../Controllers/postController');
const subController = require('../Controllers/subController');
const userController = require('../Controllers/userController');

// admin routs
router.get('/admin/create', adminController.create);
router.get('/admin/read', adminController.read);
router.get('/admin/delete', adminController.delete);
router.get('/admin/update', adminController.update);

// post routs
router.get('/post/create', postController.create);
router.get('/post/read', postController.read);
router.get('/post/delete', postController.delete);
router.get('/post/update', postController.update);

// sub routs
router.get('/sub/create', subController.create);
router.get('/sub/read', subController.read);
router.get('/sub/delete', subController.delete);
router.get('/sub/update', subController.update);

// user routs
router.get('/user/create',userController.create);
router.get('/user/read', userController.read);
router.get('/user/delete', userController.delete);
router.get('/user/update', userController.update);


// Undefined Routes
router.get("*", (req, res) => {
    res.status(404).json({ status: 'success', data: '404 not found' });
})

module.exports = router;