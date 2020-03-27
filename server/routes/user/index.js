const path = require('path')
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const assert = require('http-assert')

const router = express.Router()

const User = require(path.join(process.cwd(),'/models/User'))

const SECRET = require('config').get('SECRET')

//1. post Registet
router.post('/register',async (req,res)=>{
	const { email, password } = req.body
	
	//1.1 查询用户是否存在
	let user = await User.findOne({email})
	if(user) return res.status(400).send({message:'用户已经注册，请重新注册!'})
	
	//1.2 用户不存在，保存注册用户
	user = await User.create(req.body)
	res.send(user)
})

//2. post Login
router.post('/login',async (req,res)=>{
	const { email, password } = req.body
	//2.1 判断用户是否存在
	const user = await User.findOne({ email }).select('password')
	if(!user) return res.status(401).send({message: '用户不存在，请重新登录!'})
	
	//2.2 判断密码是否正确
	const isValid = bcrypt.compareSync(password,user.password)
	if(!isValid) return res.status(402).send({message: '密码不正确!'})
	
	//2.3 生成token
	const token = jwt.sign({id:user._id},SECRET)
	res.send({token})
})

module.exports = router