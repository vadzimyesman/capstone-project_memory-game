const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env

const {seedDataBase, createUsername, existingUsername, recieveDifficultyLevel,sendDifficultyLevel,
      recieveNewRecord, getRecords, resetRecords} = require("./controller.js")


//Middleware
app.use(express.json())
app.use(cors())

//Endpoints
app.post("/api/seed", seedDataBase)

app.post("/api/input2", createUsername)

app.post("/api/input1", existingUsername)

app.get("/api/records", getRecords)

app.delete("/api/reset/:myParam", resetRecords)

app.put("/api/option", recieveDifficultyLevel)

app.get("/api/level",sendDifficultyLevel)

app.put("/api/record", recieveNewRecord)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))


