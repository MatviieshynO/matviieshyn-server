import { Schema, model } from 'mongoose'

const messageSchema = new Schema(
  {
    yourName: {
      type: String,
      required: true,
    },
    yourEmail: {
      type: String,
      required: true,
    },
    yourTelephoneNumber: {
      type: Number,
      required: true,
    },
    bodyMessage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model('MessageSuprun', messageSchema)
