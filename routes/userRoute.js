const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// Register and login
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// CRUD routes
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUser/:id', userController.getUserById);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

router.get('/getUserInfo/:id', protect, userController.getUserInfo);

module.exports = router;
