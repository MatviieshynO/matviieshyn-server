import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import Message from './model/Message.js'

const server = express()
//dotenv
dotenv.config()
const { PORT, DB_NAME, DB_PASSWORD, DB_USER } = process.env
//midleware
server.use(cors())
server.use(express.json({ extended: true }))
//routes
server.post('/message', async (req, res) => {
  try {
    const { yourName, titleMessage, bodyMessage } = req.body
    if (!yourName) {
      return res.json({ message: 'yourName' })
    }
    if (!titleMessage) {
      return res.json({ message: 'titleMessage' })
    }
    if (!bodyMessage) {
      return res.json({ message: 'bodyMessage' })
    }

    res.json({
      yourName,
      titleMessage,
      bodyMessage,
      message: 'Complete',
    })
  } catch (error) {
    res.json({
      message: error,
    })
  }
})

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fithmoe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    )
    server.listen(PORT, () => console.log(`Server listening ${PORT} port`))
  } catch (error) {
    console.log(error)
  }
}

start()
export default server
