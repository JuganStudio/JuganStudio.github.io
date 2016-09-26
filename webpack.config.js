var webpack = require('webpack');
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false
	}
})

module.exports = {
	// configure for express.js
	express: {
		entry: './src/express/app.js',
		output: {
			path: __dirname + '/express-app',
			filename: 'express-app.js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						cacheDirectory: true,
						presets: ['es2015']
					}
				}
			]
		},
		plugins: [
			UglifyJsPlugin
		]
	},

	// configure for react.js
	react: {
		entry: './src/react/app.js',

		output: {
			path: __dirname + '/public/js',
			filename: 'react-app.js'
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						cacheDirectory: true,
						presets: ['es2015', 'react']
					}
				}
			]
		},
		plugins: [
			UglifyJsPlugin
		]
	},
	
	// configure for web browser
	browser: {
		entry: './src/js/main.js',

		output: {
			path: __dirname + '/public/js',
			filename: 'main.js'
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						cacheDirectory: true,
						presets: ['es2015']
					}
				}
			]
		},
		plugins: [
			UglifyJsPlugin
		]
	},
}
