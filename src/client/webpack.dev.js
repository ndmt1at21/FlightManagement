const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
const config = {
	mode: 'development',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve('src'),
		port: 3000,
		hot: true,
		watchContentBase: true,
		open: true
	}
};

module.exports = merge(common, config);
