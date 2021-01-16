const express = require('express');
const app = express();
const port = 3000

app.all('*', (req, res) => {
  res.status(300).redirect("http://3eholidays.ae");
});

app.listen(port, () => {
  console.log(`Redirect app listening at http://localhost:${port}`)
});