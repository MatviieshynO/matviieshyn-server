import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import Message from './model/Message.js'

const server = express()
server.use(cors())
//dotenv
dotenv.config()
//constants
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
//midleware
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
    // const sendMessage = new Message({
    //   yourName,
    //   titleMessage,
    //   bodyMessage,
    // })
    // await sendMessage.save()

    res.json({
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
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    server.listen(PORT, () => console.log(`Server listening ${PORT} port`))
  } catch (error) {
    console.log(error)
  }
}

start()
export default server
