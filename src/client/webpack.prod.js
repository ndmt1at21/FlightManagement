const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
const config = {
	mode: 'production',
	optimization: {
		minimizer: [new CssMinimizerPlugin()]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[hash].css'
		}),
		new CompressionPlugin({ test: /\.(css|js|svg)$/ })
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
								localIdentName: '[hash:base64:5]'
							}
						}
					},
					'sass-loader'
				]
			}
		]
	},
	devtool: false,
	performance: {
		maxEntrypointSize: 51200
	}
};

module.exports = merge(common, config);
