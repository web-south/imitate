const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: {type: String,required: true},
	email: {type: String,required: true},
	password: {type: String,select: false,
		set(val){return require('bcryptjs').hashSync(val,10)}},
})

const User = mongoose.model('User', userSchema)

module.exports = User