const path = require('path')
module.exports = () => {
	return async (req, res, next) => {
	  console.log(req.params)  //{ resource: 'categories' }
	  const modelName = require('inflection').classify(req.params.resource)
	  req.Model = require(path.join(process.cwd(),`/models/${modelName}`));
	  // console.log(modelName)    //Category
	  await next()
	}
}

