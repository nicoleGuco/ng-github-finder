const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
        use: [
          'file-loader?name=assets/[name].[ext]',
        ],
      },
    ],
  },
  mode: 'development',
  plugins: [

    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
