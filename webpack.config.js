import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';


export default {
	mode: 'development',
	context: path.resolve('src'),
	entry: {
		bundle: './js/index.js'
	},
	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve('dist'),
		assetModuleFilename: 'resources/[name].[hash][ext]',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/styles.[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve('src/icons/favicon.png'),
					to: path.resolve('dist/icons')
				},
			],
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name].[hash][ext]'
				}
			},
			{
				test: /\.txt$/,
				type: 'asset/source',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
};