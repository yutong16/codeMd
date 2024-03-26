var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsWebpackPlugin= require('optimize-css-assets-webpack-plugin');
module.exports = {
  	entry: {
  		index:'./src/js/index.js',
      about:'./src/js/about.js',
      curriculum:'./src/js/curriculum.js',
      product:'./src/js/product.js',
      student:'./src/js/student.js',
  		jquery:'./src/js/jquery-1.11.min.js',
  		swiper:'./src/js/swiper-bundle.min.js',
      popup:'./src/js/jquery.popup.min.js'
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
        new webpack.ProvidePlugin({
          $:'jquery',
          jQuery:'jquery',
          'window.jQuery':'jquery'
        }),
        new HtmlWebpackPlugin({
        	//指定模版页面
        	template:'./src/index.html',
        	//修改默认输出文件名
        	filename:'index.html',
        	chunks:['index','jquery','swiper','popup']
        }),
        new HtmlWebpackPlugin({
        	//指定模版页面
        	template:'./src/about.html',
        	//修改默认输出文件名
        	filename:'about.html',
        	chunks:['about','jquery']
        }),
        new HtmlWebpackPlugin({
          //指定模版页面
          template:'./src/curriculum.html',
          //修改默认输出文件名
          filename:'curriculum.html',
          chunks:['curriculum','jquery','swiper']
        }),
        new HtmlWebpackPlugin({
          //指定模版页面
          template:'./src/product.html',
          //修改默认输出文件名
          filename:'product.html',
          chunks:['product']
        }),
        new HtmlWebpackPlugin({
          //指定模版页面
          template:'./src/student.html',
          //修改默认输出文件名
          filename:'student.html',
          chunks:['student','jquery']
        }),
        //分离css
        new MiniCssExtractPlugin({
          filename:'./css/[name].css',
        }),
        //压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ]
};