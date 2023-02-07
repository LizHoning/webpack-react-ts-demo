const path = require("path");
const glob = require("glob");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const PATHS = {
	src: path.join(__dirname, "src"),
};

module.exports = merge(commonConfig, {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
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
					MiniCssExtractPlugin.loader,
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
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/assets/images/*"),
					to: path.resolve(__dirname, "dist"),
					context: "src",
				},
			],
		}),
	],
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
});
