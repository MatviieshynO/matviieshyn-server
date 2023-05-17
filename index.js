import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import Message from './model/Message.js'
import MessageSuprun from './model/MessageSuprun.js'

const server = express()
server.use(cors())
//dotenv
dotenv.config()
//constants
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
//midleware
server.use(express.json({ extended: true }))
//routes
server.post('/message', async (req, res) => {
  try {
    const { yourName, titleMessage, bodyMessage } = req.body
    if (!yourName) {
      return res.json({ message: 'Enter your name' })
    }
    if (!titleMessage) {
      return res.json({ message: 'Enter title' })
    }
    if (!bodyMessage) {
      return res.json({ message: 'Enter bodyMessage' })
    }
    const sendMessage = new Message({
      yourName,
      titleMessage,
      bodyMessage,
    })
    await sendMessage.save()

    return res.json({
      sendMessage,
      message: 'Sending is complete',
    })
  } catch (error) {
    res.json({
      message: error,
    })
  }
})
server.post('/messageSuprun', async (req, res) => {
  try {
    const { yourName, yourEmail, yourTelephoneNumber, bodyMessage } = req.body
    if (!yourName) {
      return res.json({ message: 'Enter your name' })
    }
    if (!yourEmail) {
      return res.json({ message: 'Enter your Email' })
    }
    if (!yourTelephoneNumber) {
      return res.json({ message: 'Enter your telephone number' })
    }
    if (!bodyMessage) {
      return res.json({ message: 'Enter text message' })
    }
    const sendMessage = new MessageSuprun({
      yourName,
      yourEmail,
      yourTelephoneNumber,
      bodyMessage,
    })
    await sendMessage.save()

    return res.json({
      sendMessage,
      message: 'Sending is complete',
    })
  } catch (error) {
    res.json({
      message: error,
    })
  }
})

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
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
