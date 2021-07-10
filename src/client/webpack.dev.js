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
	module: {
		rules: [
			{
				test: /\.(s[ac]ss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: {
								localIdentName: '[local]'
							}
						}
					},
					'postcss-loader'
				]
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		port: 3000,
		open: true,
		hot: true,
		watchContentBase: true,
		historyApiFallback: true
	},
	target: 'web'
};

module.exports = merge(common, config);
