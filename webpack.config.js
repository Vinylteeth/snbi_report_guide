const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // Import the plugin

module.exports = {
  // Entry point for the application
  entry: "./scripts/scripts.js", // Update with the correct path to your main JS file

  // Output configuration for bundled files
  output: {
    filename: "bundle.js", // The name of the output bundled JS file
    path: path.resolve(__dirname, "dist"), // Output folder for the bundled files
    clean: true, // Clean the 'dist' folder before each build
  },

  // Module rules to handle different types of files
  module: {
    rules: [
      // JavaScript handling (including .mjs files)
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // CSS handling
      {
        test: /\.css$/,
        use: [process.env.NODE_ENV === "production" ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"],
      },

      // Handling images and other static assets
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset/resource", // Use asset/resource for images
        generator: {
          filename: "assets/[name].[contenthash][ext]", // Hashed filenames
        },
      },
    ],
  },

  // Plugins to extend Webpack functionality
  plugins: [
    // HTML Webpack Plugin to inject the bundled JS and CSS into the HTML file
    new HtmlWebpackPlugin({
      template: "./index.html", // Your source HTML file
      inject: "body", // Inject the scripts at the end of the body tag
    }),

    // Extract CSS into a separate file during production build
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css", // Output name for the CSS file with contenthash
    }),

    // Copy static HTML files to the dist folder
    new CopyWebpackPlugin({
      patterns: [
        { from: "./iterate-logo.html", to: "iterate-logo.html" }, // Copy iterate-logo.html
        { from: "./media", to: "media" }, // Copy the media folder (if needed)
      ],
    }),
  ],

  // Resolve file extensions (so we can import .js, .mjs, and other files)
  resolve: {
    extensions: [".js", ".mjs"],
  },

  // Development server settings for live reloading and serving files
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
