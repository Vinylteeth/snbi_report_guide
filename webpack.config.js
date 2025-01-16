const path = require("path");

module.exports = {
  entry: "./index.html", // Entry point for your app
  output: {
    filename: "bundle.js", // Name of the bundled file
    path: path.resolve(__dirname, "dist"), // Output folder for bundled files
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve files from the 'dist' directory
    port: 3333, // Port to run the server
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match .css files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS
      },
      {
        test: /\.js$/, // Match .js files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: "babel-loader", // Use Babel to transpile JS
      },
    ],
  },
  mode: "development", // Run in development mode
};
