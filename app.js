const express = require('express');
const app = express();

// get method
app.get('/', (req, res) => {
  res.send('Hello World!asas');
});

// sever run with port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

