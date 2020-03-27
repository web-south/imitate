const path = require('path')
const jwt = require('jsonwebtoken')
const User = require(path.join(process.cwd(),'/models/User'))

const SECRET = require('config').get('SECRET')

module.exports = ()=> {
	return async (req,res,next)=>{
		//1. 根据token判断，是否登录
		const token = String(req.headers.authorization || '').split(' ').pop()
		if(!token) return res.status(400).send({message: "请先登录 token"})
		
		//2. 根据用户id判断，是否登录
		const { id } = jwt.verify(token,SECRET)
		if(!id) return res.status(401).send({message: "请先登录 id"})
		
		//3. 根据id，获取用户，判断是否登录
		req.user = await User.findById(id)
		if(!req.user) return res.status(402).send({message: "请先登录 user"})
		await next()
	}
}