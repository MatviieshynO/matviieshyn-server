import { Router } from 'express'

const router = new Router()

router.post('/messageSuprun', async (req, res) => {
  const { yourName, yourEmail, yourTelephoneNumber, bodyMessage } = req.body
  const message = new Post({
    yourName,
    yourEmail,
    yourTelephoneNumber,
    bodyMessage,
  })
  res.json(message)
})

export default router
