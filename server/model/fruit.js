// models/fruit.js
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },  // URL for the image
    price: { type: String, required: true }
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
