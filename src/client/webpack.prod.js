const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

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
	devtool: false,
	performance: {
		maxEntrypointSize: 51200
	}
};

module.exports = merge(common, config);
