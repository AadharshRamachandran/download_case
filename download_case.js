const express = require("express");
const path = require("path");

const app = express();

// Serve the image file for download
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "case_sherlock.dat"); 
  res.download(filePath, "case_sherlock.dat", (err) => {
    if (err) {
      console.error("Error while sending the file:", err);
      res.status(500).send("Unable to download the file.");
    }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
