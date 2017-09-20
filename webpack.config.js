const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
})

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
          fallback: "style-loader",
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.template.ejs",
      inject: "body",
    }),
    new CopyWebpackPlugin(
      [
        {
          from: "src/images",
          to: "images",
        },
      ],
      {}
    ),
    extractSass,
  ],
}
