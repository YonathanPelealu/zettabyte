require ('dotenv').config()
const express = require('express')
const app = express()
const v1 = require('./routes/v1')
const mongoose = require('mongoose')

const mongo_uri = process.env.MONGO_URI
mongoose.Promise = global.Promise;
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
mongoose.connect(mongo_uri, option)

const db = mongoose.connection
db.on('error', console.error.bind(console, "Connection Error"))
db.once("open", () => console.log ('connected to mongoDb'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1',v1)

const PORT = Number(process.env.PORT)
app.listen(PORT, ()=> {
    console.log(`app running on port ${PORT}`)
})