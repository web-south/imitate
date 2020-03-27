const express = require('express')
const router = express.Router({mergeParams: true})

// 1. get 
router.get('/', async (req,res) => {
	const models = await req.Model.find()
	.populate('grand').populate('parent').limit()
	res.send(models)
})

// 2. post 
router.post('/',async (req,res) => {
	const model = await req.Model.create(req.body)
	res.send(model)
})

// 3.1 get id
router.get('/:id',async (req,res) => {
	console.log('advert id')
	const model = await req.Model.findById(req.params.id)
	res.send(model)
})

// 3.2 put
router.put('/:id', async (req,res) => {
	const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
	res.send(model)
})

// 4. delete
router.delete('/:id',async (req,res) => {
	console.log('Hello')
	const model = await req.Model.findByIdAndDelete(req.params.id)
	res.send({success: true})
})


module.exports = router