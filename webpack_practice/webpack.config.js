const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: __dirname+'/dist'
	},

	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets:['es2015','react']
			},
		},
		{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
	},

	mode: 'production',

	optimization: {
	  minimizer: [
	    // we specify a custom UglifyJsPlugin here to get source maps in production
	    new UglifyJsPlugin({
	      cache: true,
	      parallel: true,
	      uglifyOptions: {
	        compress: false,
	        ecma: 6,
	        mangle: true
	      },
	      sourceMap: true
	    })
	  ]
	},

}