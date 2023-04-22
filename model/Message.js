import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
)

export default model('Message', userSchema)
