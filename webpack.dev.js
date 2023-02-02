const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
	mode: "development",
	devServer: {
		static: "./dist",
	},
	plugins: [new BundleAnalyzerPlugin({})],
});
