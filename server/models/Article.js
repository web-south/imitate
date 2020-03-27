const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
	title: {
		type: String
	},
	categories: [{
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'Category'
	}],
	content: {type: String}
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
