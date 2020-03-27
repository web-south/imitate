const express = require("express");
const path = require("path");
const multer = require('multer');

const router = express.Router();

const upload = multer({
	dest: path.join(process.cwd(), '/uploads'),
});
	router.post('/uploads', upload.single('file'),async (req, res) => {
	const file = req.file;
	file.url = `http://localhost:3000/uploads/${file.filename}`
	res.send(file)
})

module.exports = router;