const express = require("express");
const app = express();

// Serve static files from the 'scripts' directory
app.use("/styles", express.static("styles"));
app.use("/scripts", express.static("scripts"));

// Serve the index.html from the root directory
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Path to your HTML
});

// Start the server on port 3333
app.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
