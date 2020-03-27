const express = require('express')
const path = require("path")
const app = express()

require(path.join(process.cwd(),'/db/connect'))()

app.use(require('cors')())

app.use('/uploads',express.static(path.join(process.cwd() ,'/uploads')))
app.use(express.static(path.join(process.cwd() ,'/public')))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

require(path.join(process.cwd(),'/routes'))(app)

app.use(async(err,req,res,next)=>{
	res.locals.error = req.app.get('/env') === 'development' ? 'err' : {}
	res.status(err.statusCode || 500).send({
		message: err.message
	})
})

const PORT = 3000

app.listen(PORT, () => {
	console.info(`Server running on http://localhost:${PORT}...`)
})