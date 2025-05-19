const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5500

app.use(cors())

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from Node.js backend" })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})


