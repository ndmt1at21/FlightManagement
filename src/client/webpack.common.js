const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

/** @type {import('copy-webpack-plugin'.ObjectPattern} */
const copyPluginPattern = {
	from: path.resolve('public'),
	to: path.resolve('dist'),
	filter: resourcePath => {
		return resourcePath.split('/').pop() !== 'index.html';
	}
};

/** @type {import('webpack').Configuration} */
const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve('dist'),
		publicPath: '/',
		filename: 'static/js/[name].[hash].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@src': path.resolve('src'),
			'@components': path.resolve('src/components'),
			'@types': path.resolve('src/@types')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		}),
		new InterpolateHtmlPlugin({
			PUBLIC_URL: '.'
		}),
		new CopyPlugin({ patterns: [copyPluginPattern] }),
		new CleanWebpackPlugin(),
		new Dotenv()
	],
	module: {
		rules: [
			{ test: /\.html$/, use: 'html-loader' },
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			},
			{
				test: /\.(s[ac]ss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'static/fonts/[name].[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'static/images/[name].[hash].[ext]'
						}
					}
				]
			}
		]
	}
};

module.exports = config;
