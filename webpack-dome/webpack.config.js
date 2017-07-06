var path = require("path")
module.exports = {
	entry:"./src/script/main.js",
	output:{
		path: path.resolve(__dirname, './disk/js'),
		filename:"hundle.js"
	}
}
