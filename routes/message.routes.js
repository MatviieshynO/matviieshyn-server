import { Router } from 'express'

const router = new Router()

router.post('/message', async (req, res) => {
  const { yourName, titleMessage, bodyMessage } = req.body
  const message = new Post({
    yourName,
    titleMessage,
    bodyMessage,
  })
  res.json(message)
  console.log(yourName, titleMessage, bodyMessage)
})

export default router
