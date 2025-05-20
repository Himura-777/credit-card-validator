const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'images/[name][ext]' // Добавляем эту строку
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]' // Указываем явный путь для изображений
				}
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'licenses.txt', to: 'licenses.txt' },
				{ from: 'src/images', to: 'images' } // Копируем изображения напрямую
			],
		}),
	],
};