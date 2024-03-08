const connectToMongo=require('./db')
const express = require('express')
var Data = require('./models/Data')
var cors = require('cors')   
var Notes = require('./models/note')

connectToMongo();

const app = express()
const port = 5000
app.use(cors())

app.get('/', async (req, res) => {

    try {
        const data = await Data.find({})
         res.json(data)

    } catch (error) {
        console.error(error.message)
        res.send(500).send("Internal Server Error Occured")
    }
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })