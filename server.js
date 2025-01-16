const express = require("express");
const path = require("path"); // Import the path module
const app = express();

// Serve static files from the 'styles' and 'scripts' directories
app.use("/styles", express.static("styles"));
app.use("/scripts", express.static("scripts"));
app.use("/media", express.static(path.join(__dirname, "media"))); // Use path.join to resolve the media folder

// Serve the index.html from the root directory
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Path to your HTML
});
app.get("/iterate-logo.html", (req, res) => {
  res.sendFile(__dirname + "/iterate-logo.html");
});

// Start the server on port 3333
app.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
