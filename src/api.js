const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Sample received a request.');

  res.send({message: 'OK'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Sample listening on port', port);
});