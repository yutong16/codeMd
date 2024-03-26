var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  	entry: {
  		index:'./src/index.js',
  		jquery:'./src/jquery.js',
  		xx:'./src/xx.js'
  	},
  	output: {
   	 	path: path.resolve(__dirname, 'dist')
 	},
  	module: {
	    rules: [{ 
	    	test: /\.css$/, 
	    	use: ['style-loader','css-loader']
		}]
	},
	plugins: [
        new HtmlWebpackPlugin({
        	//指定模版页面
        	template:'./src/index.html',
        	//修改默认输出文件名
        	filename:'index.html',
        	//配置不允许注入
        	excludeChunks:['xx']
        }),
        new HtmlWebpackPlugin({
        	//指定模版页面
        	template:'./src/xx.html',
        	//修改默认输出文件名
        	filename:'xx.html',
        	chunks:['jquery','xx']
        })
    ]
};