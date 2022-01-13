const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/308', (req, res) => {
    res.send('get request')
    // res.redirect('/final')
})

app.post('/308', (req, res) => {
    // res.send('post request')
    res.redirect(308,'/final')
})

app.get('/307', (req, res) => {
    res.send('get request')
    // res.redirect('/final')
})

app.post('/307', (req, res) => {
    // res.send('post request')
    res.redirect(307,'/final')
})

app.post('/final', (req, res) => {
    res.send({ res: 'final post'})
})

app.get('/final', (req, res) => {
    res.send({ res: 'final get'})
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/post.js', (req, res) => {
  res.sendFile(path.join(__dirname,'post.js'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
