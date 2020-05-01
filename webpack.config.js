const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
	entry: ["react-hot-loader/patch", "./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: {
		contentBase: "./dist",
		port: "3001"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.ts(x)?$/,
				use: ["awesome-typescript-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			appMountId: "app",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin(),
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"react-dom": "@hot-loader/react-dom",
		},
	},
};

module.exports = config;
