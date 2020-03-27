const path = require('path')
const web = require('./routes/web')
const user = require('./routes/user')
const admin = require('./routes/admin')
const upload = require('./routes/upload')

const resource = require(path.join(process.cwd(),'/middleware/resourse'))
const auth = require(path.join(process.cwd(),'/middleware/authorization'))

module.exports = app => {
	app.use('/web',web)
	app.use('/admin/api',user)
	app.use('/admin/api',upload)
	app.use('/admin/api/rest/:resource',resource(), admin)
}