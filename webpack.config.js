module.exports = {
	entry: './app/App.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}]
	},
	devServer: {
		inline: true,
		port: 8080
	}
};