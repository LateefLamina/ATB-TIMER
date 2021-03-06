const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000;
//Define request response in root URL (/)
app.get('/', (req, res) => {
  res.send(new Date(Date.now()).toLocaleString())
})
module.exports = app.listen(port, () => console.log(`Server listening on port ${port}`));