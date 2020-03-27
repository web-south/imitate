const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
	name: {type: String},
	icon: {type: String},
	parent: {type: mongoose.SchemaTypes.ObjectId,ref: 'Item'}
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item