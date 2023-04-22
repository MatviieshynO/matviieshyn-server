import { Schema, model } from 'mongoose'

const messageSchema = new Schema(
  {
    yourName: {
      type: String,
      required: true,
    },
    titleMessage: {
      type: String,
      required: true,
    },
    bodyMessage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model('Message', messageSchema)
