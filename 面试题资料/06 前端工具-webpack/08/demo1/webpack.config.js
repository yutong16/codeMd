var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsWebpackPlugin= require('optimize-css-assets-webpack-plugin');
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
	    rules: [
      { 
	    	test: /\.css$/, 
	    	use: [MiniCssExtractPlugin.loader,'css-loader']
		  },
      {
        test: /\.(png|jpg|jpeg|gif)$/, 
        use: [{
            loader:'file-loader',
            options:{
              esModule:false,
              outputPath:'img/'
            }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/, 
        use: 'file-loader?name=./fonts/[name].[ext]'
      },
      {
        test: /\.html$/, 
        use: 'html-withimg-loader'
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
        }),
        //分离css
        new MiniCssExtractPlugin({
          filename:'./css/[name].css',
        }),
        //压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ]
};