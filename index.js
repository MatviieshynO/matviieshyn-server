import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import Message from './Message.js'

dotenv.config()
const server = express()
//dotenv
const { PORT, DB_NAME, DB_PASSWORD, DB_USER } = process.env
//midleware
server.use(cors())
server.use(express.json())
//routes
server.post('/message', async (req, res) => {
  try {
    if (!req.body)
      res.json({
        message: 'Enter the data',
      })
    const { yourName, titleMessage, bodyMessage } = req.body

    const message = new Message({
      name: yourName,
      title: titleMessage,
      body: bodyMessage,
    })
    await message.save()
    res.json({
      message: 'Thank you, message sent',
    })
  } catch (error) {
    res.json({
      message: `Error sending message `,
    })
  }
})

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fithmoe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    server.listen(PORT, () =>
      console.log(`Server listening  htttp://localhost${PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
