// routes/fruitRoutes.js
const express = require('express');
const router = express.Router();
const fruitController = require('../controllers/fruitCtrl');

// Routes
router.get('/fruits', fruitController.getAllFruits);       // Get all fruits
router.post('/fruits', fruitController.addFruit);          // Add a new fruit
router.get('/fruits/:id', fruitController.getFruitById);   // Get a fruit by ID
router.put('/fruits/:id', fruitController.updateFruit);    // Update a fruit by ID
router.delete('/fruits/:id', fruitController.deleteFruit); // Delete a fruit by ID

module.exports = router;
