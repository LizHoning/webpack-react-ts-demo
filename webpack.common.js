const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: {
								mode: "local",
								exportLocalsConvention: "dashes",
								localIdentName: "[local]--[hash:base64]",
							},
						},
					},
				],
			},

			{
				test: /\.s[ac]ss$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: {
								mode: "local",
								exportLocalsConvention: "dashes",
								localIdentName: "[local]--[hash:base64]",
							},
						},
					},
					{ loader: "sass-loader" },
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
};
