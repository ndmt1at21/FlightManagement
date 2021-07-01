const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
	mode: 'production',
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new HtmlWebpackPlugin({
				template: 'public/index.html',
				minify: {
					collapseWhitespace: true,
					removeComments: true
				}
			})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[hash].css'
		}),
		new CompressionPlugin({ test: /\.(css|js|svg)$/ })
	],
	devtool: false,
	performance: {
		maxEntrypointSize: 51200
	}
};

module.exports = merge(common, config);
