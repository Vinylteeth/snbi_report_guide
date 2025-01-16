const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Import the plugin

module.exports = {
  entry: "./index.html", // Entry point remains your existing index.html
  output: {
    filename: "bundle.js", // Name of the bundled JavaScript file
    path: path.resolve(__dirname, "dist"), // Output folder for bundled files
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve files from 'dist'
    port: 3333, // Port for the server
  },
  module: {
    rules: [
      {
        test: /\.css$/, // CSS loader
        use: ["style-loader", "css-loader"], // CSS loading
      },
      {
        test: /\.js$/, // JS loader
        exclude: /node_modules/,
        use: "babel-loader", // Babel for JS transpiling
      },
      {
        test: /\.html$/, // Add this rule to process HTML files
        use: ["html-loader"], // Use html-loader to handle HTML files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Use your existing index.html as the template
      inject: "body", // Inject the script tag at the bottom of the body
    }),
  ],
  mode: "development", // Development mode
};
