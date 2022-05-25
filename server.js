const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
require('colors');

const students = require('./routes/student')

const connectDB = require('./dbinit')

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/students', students)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})