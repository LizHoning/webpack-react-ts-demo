const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
	mode: "development",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 9001,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
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
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [["postcss-preset-env", {}]],
							},
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					"style-loader",
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
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [["postcss-preset-env", {}]],
							},
						},
					},
					"sass-loader",
				],
			},
		],
	},
	plugins: [new BundleAnalyzerPlugin({})],
});
