import express from 'express'
import { engine } from 'express-handlebars'

//const express = require('express')
const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {res.render(home) })
app.get("/sobre", (req, res) => {res.render})
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