const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
	name: {type: String},
	grand: {type: mongoose.SchemaTypes.ObjectId,ref: 'Category'},
	parent: {type: mongoose.SchemaTypes.ObjectId,ref: 'Category'}
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category