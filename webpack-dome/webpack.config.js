var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js',
	},
	output:{
		path:path.resolve('./dist'),
		filename:'js/[name]-[hash].js',
		publicPath:'http://cdn.com/'
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'a.html',
			template:'index.html',
			inject:false,
			title:'wepack is a',
			chunks:['main','a']
		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			template:'index.html',
			inject:false,
			title:'wepack is b',
			chunks:['b','main']
		}),
		new htmlWebpackPlugin({
			filename:'c.html',
			template:'index.html',
			inject:false,
			title:'wepack is c',
			chunks:['c','main']
		})
	]
}
