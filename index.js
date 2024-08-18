const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const jsonFilePath = path.join(__dirname, '/api/links/links_whmer.json');


app.get('/api/links', (req, res) => {
  res.sendFile(jsonFilePath);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
