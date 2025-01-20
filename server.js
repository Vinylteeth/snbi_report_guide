const express = require("express");
const path = require("path");

const app = express();
const port = 3333;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

// Serve the index.html file at the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
