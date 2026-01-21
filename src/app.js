import express from 'express'
import contact from './routes/contactrouter.js'

const app = express()
const port = 3000

app.use(contact)

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
})
