require('dotenv').config()

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const increaseSpecificity = require('postcss-increase-specificity')
const JavaScriptObfuscator = require('webpack-obfuscator')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

const publicDir = path.join(__dirname, 'public')
const distDir = path.join(__dirname, 'dist')

const CONSTANTS = [
	'NODE_ENV',
	'HOSTNAME',
	'API_VERSION',
	'SESSION_SECRET',
	'COOKIE_SECRET',
	'RADPLAID_CLIENT_ID',
	'BASE_CLIENT_URL',
	'BASE_SERVER_URL',
	'ASSET_URL',
	'GA_ID',
	'GA_CONVERSION_ID',
	'DATE_FORMAT',
	'FACEBOOK_APP_ID',
	'AUTHO_CLIENT_ID',
	'SOUNDCLOUD_CLIENT_ID',
	'KICKBOX_APP_CODE',
	'LOCATION_ACCURACY',
	'MAPBOX_ACCESS_TOKEN',
	'MIXPANEL_KEY',
	'SENTRY_KEY'
]

const getEnv = () => {
	let env = {}

	CONSTANTS.forEach((key) => {
		env[key] = JSON.stringify(process.env[key])
	})

	return env
}

const defaultConfig = {
	mode: process.env.NODE_ENV || 'development',
	devServer: {
		contentBase: publicDir,
		port: 9000,
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
		new CopyPlugin([
			{ from: 'public', to: '.' },
		]),
		new webpack.DefinePlugin({
			'process.env': getEnv()
		}),
		devMode ? null : new JavaScriptObfuscator(),
	].filter(i => i),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					emitWarning: true,
				},
			},
			{
				test: /\.(scss|css)$/,
				use: [
					// fallback to style-loader in development
					// devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'style-loader',
					'css-loader',
					'cssimportant-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								increaseSpecificity({
									stackableRoot: '.cleanslate',
									repeat: 1,
								}),
							],
							sourceMap: devMode,
						},
					},
					'sass-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
}

module.exports = [{
	...defaultConfig,
	entry: './src/outputs/embeddable-widget.js',
	output: {
		path: distDir,
		publicPath: '/',
		filename: 'widget.js',
		library: 'EmbeddableWidget',
		libraryExport: 'default',
		libraryTarget: 'window',
	},
}, {
	...defaultConfig,
	entry: './src/outputs/bookmarklet.js',
	output: {
		path: distDir,
		publicPath: '/',
		filename: 'bookmarklet.js',
	},
}]
