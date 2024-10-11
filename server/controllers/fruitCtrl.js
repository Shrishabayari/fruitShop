// controllers/fruitController.js
const Fruit = require('../model/fruit');

// Get all fruits
exports.getAllFruits = async (req, res) => {
    try {
        const fruits = await Fruit.find();
        res.status(200).json(fruits); // Return status 200 for success
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new fruit
exports.addFruit = async (req, res) => {
    try {
        const { name, image, price } = req.body;
        const newFruit = new Fruit({ name, image, price });
        await newFruit.save();
        res.status(201).json(newFruit); // Status 201 for successful creation
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a specific fruit by ID
exports.getFruitById = async (req, res) => {
    try {
        const fruit = await Fruit.findById(req.params.id);
        if (!fruit) {
            return res.status(404).json({ error: 'Fruit not found' }); // 404 if not found
        }
        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a fruit by ID
exports.updateFruit = async (req, res) => {
    try {
        const { name, image, price } = req.body;
        const fruit = await Fruit.findByIdAndUpdate(req.params.id, { name, image, price }, { new: true });
        if (!fruit) {
            return res.status(404).json({ error: 'Fruit not found' }); // 404 if not found
        }
        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a fruit by ID
exports.deleteFruit = async (req, res) => {
    try {
        const fruit = await Fruit.findByIdAndDelete(req.params.id);
        if (!fruit) {
            return res.status(404).json({ error: 'Fruit not found' }); // 404 if not found
        }
        res.status(200).json({ message: 'Fruit deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
