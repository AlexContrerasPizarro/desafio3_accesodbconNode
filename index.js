const { putPosts, getPosts } = require('./posts')
const express = require('express')
const cors = require("cors");
const app = express()

app.use(express.json())
app.use(cors());
app.use(express.static('public'))


app.listen(3000, console.log("Servidor encendido"))

app.get('/', () => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/posts', async (req, res) => {
    const posts = await getPosts()
    res.json(posts)
})


app.post('/posts', async (req, res) => {
    const { titulo, url, descripcion, likes } = req.body
    await putPosts(titulo, url, descripcion, likes)
    res.send("post agregado")
})