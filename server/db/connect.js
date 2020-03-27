const mongoose = require('mongoose')

module.exports = ()=>{
	mongoose.connect('mongodb://localhost:27017/express-vue-moba',{
		useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true
	}).then(() => console.log('数据库连接成功'))
	  .catch(() => console.log('数据库连接失败'))
}