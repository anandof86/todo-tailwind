const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_module/,
				use: [{
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						plugins: ['@babel/plugin-transform-runtime']
					}
				}]
			},
			{
                test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html'
		}),
		new webpack.ProvidePlugin({
			"React": "react",
		})
		
	]
};