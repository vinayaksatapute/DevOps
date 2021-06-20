const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;
const config = require('config')
console.log(config);

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('CICD App V8.0!')
=======
  res.send('CICD App Direct Edit V7.0!')
>>>>>>> 04a51b0f200d77853bc93153838da205f186939e
})

app.get('/status', (req, res) => {
    res.send('ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
