const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ExamDB', { useNewUrlParser: true })

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Type is required'], minlength: [3, 'Please enter at least 3 chracters!'] },
    quantity: { type: Number, required: [true, 'Quantity is required'], min: [0, 'Quantity must be ) or greater!'] },
    price: { type: Number, required: [true, 'Price is required'],min: [0, 'Price must be equal to or greater than 0!'] },
})

const products = mongoose.model('products', ProductSchema)

module.exports = products