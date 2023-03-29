const express = require('express')
const app = express()

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send("oi")
})

const port = process.env.PORT || 3000
const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`\n\nListen on port ${port}.`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()